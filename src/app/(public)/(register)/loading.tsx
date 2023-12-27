import { Skeleton } from "@/components/skeleton";
import { Grid } from "../styles";
import { LoadingRegister } from "./styles";

export default function RegisterUser() {
    return (
        <LoadingRegister>
            <Grid>
                <Skeleton sizeColumn={2} sizeRow={1 / 8} />
                <Skeleton sizeColumn={2} sizeRow={8} />
            </Grid>
        </LoadingRegister>
    )
}