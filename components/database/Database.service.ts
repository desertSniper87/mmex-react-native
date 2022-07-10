import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
// import QUERY_ALL_DATA from './raw/query_alldata.sql';
import TABLES_V1 from './raw/tables_v1';
import React from "react";
import { Alert } from "react-native";

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return openDatabase({name: 'data.mmb', location: 'default'});
};

export const createTables = async (db: SQLiteDatabase) => {
  await db.executeSql(TABLES_V1);
};




