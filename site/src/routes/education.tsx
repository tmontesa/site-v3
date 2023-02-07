import { useQuery } from "@apollo/client";
import { QUERY_EDUCATION } from "../queries/education.gql";
import { mapEducation } from "../mappers/mapEducation";
import { IEducation } from "../interfaces/IEducation";
import { Category } from "../components/Category/Category";
import "../style/Page/Page.scss";
import "../style/Page/EducationPage.scss";
import { Entry } from "../components/Entry/Entry";
import { useEffect } from "react";
import { Loading } from "../components/Loading";

type Props = {
    
}

export function EducationPage(props: Props) {
    const { loading, error, data } = useQuery(QUERY_EDUCATION);

    useEffect(() => {
        document.title = "Timothy James Montesa | Education"
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>Error : {error.message}</p>;
    
    var education: IEducation = (data != null) ? mapEducation(data) : {} as IEducation;
    
    return(
        <div className="page" id="education-page">
            <div id="school">
                <Entry
                    title={education.schoolTitle}
                    subtitle={education.schoolSubtitle}
                    description={education.schoolDescription}
                    links={null}
                    tags={null}/>
            </div>
            
            {education && education.educationCategories &&
                education.educationCategories.map((category) =>
                    <Category title={category.title} entries={category.entries} />
                )
            }
        </div>
    )
}