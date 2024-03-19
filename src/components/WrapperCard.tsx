import { Card, CardBody, CardHeader, Divider, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export function WrapperCard({ children }: { children: ReactNode }) {
  return (
    <Card w="300px" m={4}>
      <CardHeader>
        <Text fontSize="lg" fontWeight="bold">
          MEU PEDIDO
        </Text>
      </CardHeader>
      <Divider color="gray.500"></Divider>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
