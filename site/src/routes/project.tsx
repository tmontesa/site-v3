import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Category } from "../components/Category/Category";
import { Loading } from "../components/Loading";
import { IProject } from "../interfaces/IProject";
import { mapProject } from "../mappers/mapProject";
import { QUERY_PROJECT } from "../queries/project.gql";
import "../style/Page/Page.scss";
import "../style/Page/ProjectPage.scss";

type Props = {
    
}

export function ProjectPage(props: Props) {
    const { loading, error, data } = useQuery(QUERY_PROJECT);
    
    useEffect(() => {
        document.title = "Timothy Montesa | Projects"
    }, []);

    if (loading) return <Loading />;
    if (error) return <p>Error : {error.message}</p>;
    
    var project: IProject = (data != null) ? mapProject(data) : {} as IProject;

    return(
        <div className="page" id="project-page">
            {project && project.projectCategories &&
                project.projectCategories.map((category) =>
                    <Category title={category.title} entries={category.entries} />
                )
            }
        </div>
    )
}