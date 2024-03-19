import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  HStack,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { WrapperCard } from "./WrapperCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItem, removeItem } from "../redux/slices/orderSlice";

export function OrderList() {
  const [item, setItem] = useState("");

  const { items } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  return (
    <Center height="100vh" flexDir="column">
      <WrapperCard>
        <List>
          {items.map((item) => {
            return (
              <ListItem key={item.id}>
                <HStack spacing={4}>
                  <Text width="140px">{`${item.qtd} - ${item.name}`}</Text>
                  <DeleteIcon
                    cursor="pointer"
                    color="red.400"
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  />
                </HStack>
              </ListItem>
            );
          })}
        </List>
      </WrapperCard>

      <Card w="300px" m={4}>
        <CardBody>
          <Input value={item} onChange={(e) => setItem(e.target.value)} />
          <Button
            colorScheme="green"
            w="100%"
            mt={2}
            onClick={() =>
              dispatch(
                addItem({
                  id: 4,
                  name: item,
                  qtd: 1,
                })
              )
            }
          >
            ADD
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
}
