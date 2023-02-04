import "../style/Page/Page.scss";
import "../style/Page/ExperiencePage.scss";
import { useQuery } from "@apollo/client";
import { QUERY_EXPERIENCE } from "../queries/experience.gql";
import { IExperience } from "../interfaces/IExperience";
import { mapExperience } from "../mappers/mapExperience";
import { Category } from "../components/Category/Category";
import { useEffect } from "react";

type Props = {
    
}

export function ExperiencePage(props: Props) {
    const { loading, error, data } = useQuery(QUERY_EXPERIENCE);

    useEffect(() => {
        document.title = "Timothy James Montesa | Experience"
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    var experience: IExperience = (data != null) ? mapExperience(data) : {} as IExperience;
    var industryExperience = (experience != null) ? experience.industryExperience : null;
    var otherExperience = (experience != null) ? experience.otherExperience : null;

    return(
        <div className="page" id="experience-page">
            {industryExperience &&
                <Category title="Industry Experience" entries={industryExperience} />
            }
            {otherExperience &&
                <Category title="Other Experience" entries={otherExperience} />
            }
        </div>
    )
}