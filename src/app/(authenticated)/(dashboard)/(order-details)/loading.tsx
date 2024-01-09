import { Skeleton } from "@/components/skeleton";
import { BoxLoading, SimpleGrid } from "../../styles";

export default function OrderDetailsLoading() {
    return (
        <BoxLoading>
            <SimpleGrid>
                <Skeleton sizeColumn={14} sizeRow={1} />
                <Skeleton sizeColumn={14} sizeRow={6} />
                <Skeleton sizeColumn={14} sizeRow={9} />
            </SimpleGrid>
        </BoxLoading>
    )
}