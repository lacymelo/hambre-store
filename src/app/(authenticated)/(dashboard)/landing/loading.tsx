import { Skeleton } from "@/components/skeleton";
import { BoxLoading, SimpleGrid } from "../../styles";

export default function AuthLoading() {
    return (
        <BoxLoading>
            <SimpleGrid>
                <Skeleton sizeColumn={14} sizeRow={1} />
                <Skeleton sizeColumn={7} sizeRow={2} />
                <Skeleton sizeColumn={7} sizeRow={2} />
                <Skeleton sizeColumn={14} sizeRow={5} />
            </SimpleGrid>
        </BoxLoading>
    )
}