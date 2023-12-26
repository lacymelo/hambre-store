import { Grid, LoadingBox } from "../styles";
import { Skeleton } from "@/components/skeleton";

export default function HomeLoading() {
    return (
        <LoadingBox>
            <Grid>
                <Skeleton sizeColumn={1} sizeRow={1} />
                <Skeleton sizeColumn={1} sizeRow={2} />
                <Skeleton sizeColumn={1} sizeRow={1} />
            </Grid>
        </LoadingBox>
    )
}