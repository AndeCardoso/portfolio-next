import React from "react";

import { Key, Row, Table, Value } from "./styles";
import { colors } from "@global/colors";
import { IInfoList } from "@app/@types/infos";

interface IAttributesTableProps {
  data: IInfoList;
}

export const AttributesTable = ({ data }: IAttributesTableProps) => {
  return (
    <Table>
      {Object.entries(data).map((item) => {
        return (
          <Row key={`${item[0]}`}>
            <Key size={14} bold="medium" color={colors.PRIMARY} capsLock>
              {item[1].LABEL}:
            </Key>
            <Value size={14} bold="medium">
              {item[1].INFO}
            </Value>
          </Row>
        );
      })}
    </Table>
  );
};
