import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    padding: 3,
  },
});

const SyllabusPDF = ({ stream, course, year }) => {
  const tableData = [
    ["Subject 1", "Subject 2"],
    ["Subject 3", "Subject 4"],
    ["Subject 5", "Subject 6"],
    ["Subject 7", "Subject 8"],
    ["Subject 9", "Subject 10"],
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{`${stream} - ${course} - ${year}`}</Text>
          <Text>Course Duration : {`some`} years</Text>
        </View>
        <View style={styles.table}>
          {tableData.map((rowData, index) => (
            <View key={index} style={styles.tableRow}>
              {rowData.map((cellData, cellIndex) => (
                <View key={cellIndex} style={styles.tableCol}>
                  <Text style={styles.tableCell}>{cellData}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default SyllabusPDF;
