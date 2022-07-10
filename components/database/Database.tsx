import React from "react";
import { Alert } from "react-native";
import { createTables, getDBConnection } from "./Database.service";
import { setDb } from "./Database.slice";

export default function Database() {
  const loadDataCallback = React.useCallback(async () => {
    try {
      const db = await getDBConnection();
      setDb(db);
      // await createTables(db);
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }, []);

  React.useEffect(() => {
    loadDataCallback()
  }, [loadDataCallback])

  return <></>
}
