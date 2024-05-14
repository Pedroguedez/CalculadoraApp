import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';


const CalcButton = ({ onPress, label, mode, style, labelStyle, disabled } :any) => (
  <Button
    onPress={onPress}
    mode={mode}
    style={style}
    labelStyle={labelStyle}
    disabled={disabled}
  >
    {label}
  </Button>
);
export default function App() {
  const [expression, setExpression] = useState<string>("0");

  const handlePress = (value: string) => {
    if (expression === '0') {
      setExpression(value);
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };


  const CalculaResultado = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("0");
  };

  const handleDelete = () => {
    if (expression !== '0') {
      setExpression(prevExpression => prevExpression.slice(0, -1));
    }
  };


  return (
   <>
    <View style={{ backgroundColor: "#000" }}>
      <Text style={styles.expression}>{expression}</Text>
    </View>

    <View style={styles.container}>

      <View style={{ alignItems: 'flex-end', right: "-35%" }}>
        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="backspace" size={36} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 2, height: 1, backgroundColor: '#444', width: '95%', marginBottom: 10 }}></View>
      <View style={styles.row}>

      </View>
      <View style={styles.row}>
        <CalcButton
          onPress={clearExpression}
          mode="outlined"
          style={[styles.button, { justifyContent: "center", alignItems: 'center' }]}
          labelStyle={{ color: "#FF9500", fontSize: 20 }}
          label="C"
        />
    
        <CalcButton
          onPress={() => handlePress('%')}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "yellow", fontSize: 20 }}
          label="%"
          disabled={true}
        />

        <CalcButton
          onPress={() => handlePress('/')}
          mode="outlined"
          style={[styles.button,]}
          labelStyle={{ color: "yellow", fontSize: 20 }}
          label="/"
        />

        <CalcButton
          onPress={CalculaResultado}
          mode="contained"
          style={[
            styles.button,
            { backgroundColor: "yellow" },
          ]}
          labelStyle={{ color: "#000", fontSize: 18 }}
          label="="
        />
      </View>
      <View style={styles.row}>
        <CalcButton
          onPress={() => handlePress("7")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="7"
        />
        <CalcButton
          onPress={() => handlePress("8")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="8"
        />
        <CalcButton
          onPress={() => handlePress("9")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="9"
        />
        <CalcButton
          onPress={() => handlePress("*")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "yellow", fontSize: 20 }}
          label="x"
        />
      </View>
      <View style={styles.row}>
        <CalcButton
          onPress={() => handlePress("4")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="4"
        />
        <CalcButton
          onPress={() => handlePress("5")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="5"
        />
        <CalcButton
          onPress={() => handlePress("6")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="6"
        />
        <CalcButton
          onPress={() => handlePress("-")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "yellow", fontSize: 20 }}
          label="-"
        />
      </View>
      <View style={styles.row}>
        <CalcButton
          onPress={() => handlePress("1")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="1"
        />
        <CalcButton
          onPress={() => handlePress("2")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="2"
        />
        <CalcButton
          onPress={() => handlePress("3")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="3"
        />
        <CalcButton
          onPress={() => handlePress("+")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "yellow", fontSize: 20 }}
          label="+"
        />
      </View>
      <View style={styles.row}>
        <CalcButton
          onPress={() => handlePress("0")}
          mode="outlined"
          style={[
            styles.button,
          ]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="0"
        />
        <CalcButton
          onPress={() => handlePress(".")}
          mode="outlined"
          style={[styles.button]}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="."
        />
      </View>
    </View>
  </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  expression: {
    color: "#fff",
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'right',
    marginRight: "10%",
    marginTop: "20%"
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "-10%",
    marginVertical: "1%",
  },
  button: {
    backgroundColor: "#222",
    width: 85,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35 / 2,
    color: "#fff",
    marginRight: "2%",
  },
});