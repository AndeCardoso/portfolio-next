import React from "react";

import { Key, Row, Table, Value } from "./styles";
import { colors } from "@src/global/colors";

interface IAttributesTableProps {
  data: Object;
}

export const AttributesTable = ({ data }: IAttributesTableProps) => {
  return (
    <Table>
      {Object.entries(data).map((item, index) => {
        return (
          <Row key={`${index}`}>
            <Key size={14} bold="medium" color={colors.PRIMARY} capsLock>
              {item[0]}:
            </Key>
            <Value size={14} bold="medium">
              {item[1]}
            </Value>
          </Row>
        );
      })}
    </Table>
  );
};
