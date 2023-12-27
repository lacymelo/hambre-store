import { Skeleton } from "@/components/skeleton";
import { Grid, LoadingPublic } from "./styles";

export default function HomeLoading() {
    return (
        <LoadingPublic>
            <Grid>
                <Skeleton sizeColumn={1} sizeRow={1 / 8} />
                <Skeleton sizeColumn={1} sizeRow={8} />
                <Skeleton sizeColumn={1} sizeRow={7} />
            </Grid>
        </LoadingPublic>
    )
}