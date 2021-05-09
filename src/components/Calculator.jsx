import { useEffect, useState } from "react";
import style from "../styles/Calculator.module.css";

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [focused_1, setFocused_1] = useState(false);
  const [focused_2, setFocused_2] = useState(false);
  const [focused_3, setFocused_3] = useState(false);
  const [focused_4, setFocused_4] = useState(false);
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [isLiquid, setIsLiquid] = useState(false);

  const regex = /^[0-9\b]+$/;

  function makeAllZero() {
    setValue(0);
    setWeight("");
    setLength("");
    setHeight("");
    setDepth("");
    setIsLiquid(false);
  }

  function getNonLiquidCost() {
    if (weight === 0 && length >= 40 && height >= 40 && depth >= 40) {
      setValue(((height * depth * length) / 6000) * 4.5);
    } else if (weight > 0 && weight <= 0.2) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 1);
      } else setValue(1);
    } else if (weight >= 0.21 && weight <= 0.5) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 2.5);
      } else setValue(2.5);
    } else if (weight >= 0.51 && weight <= 0.75) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 3.5);
      } else setValue(3.5);
    } else if (weight >= 0.76 && weight <= 1) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 4.5);
      } else setValue(4.5);
    } else if (weight >= 1.01 && weight <= 10) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 4.5);
      } else setValue(4.5 * weight);
    } else if (weight >= 10) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 4);
      } else setValue(4 * weight);
    } else setValue(0);
  }

  function getLiquidCost() {
    if (weight === 0 && length >= 40 && height >= 40 && depth >= 40) {
      setValue(((height * depth * length) / 6000) * 4.5);
    } else if (weight > 0 && weight <= 0.2) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 2);
      } else setValue(2);
    } else if (weight >= 0.26 && weight <= 0.5) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 4);
      } else setValue(4);
    } else if (weight >= 0.51 && weight <= 0.75) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 6);
      } else setValue(6);
    } else if (weight >= 0.76 && weight <= 1) {
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 7);
      } else setValue(7);
    } else if (weight >= 1.01) {
      console.log("worked");
      if (length >= 40 && height >= 40 && depth >= 40) {
        setValue(((height * depth * length) / 6000) * 7);
      } else setValue(7 * weight);
    } else setValue(0);
  }

  const countCost = () => {
    if (isLiquid === false) {
      getNonLiquidCost();
    } else if (isLiquid) {
      getLiquidCost();
    }
  };

  function isInputZero() {
    if (weight === "" && length === "" && weight === "" && depth === "") {
      setValue(0);
    }
  }

  useEffect(() => {
    countCost();
  }, [weight, length, height, depth, isLiquid]);

  const liquidCheck = (e) => {
    setIsLiquid(e.target.checked);
  };

  function blurredInput_1() {
    setFocused_1(false);
  }

  function blurredInput_2() {
    setFocused_2(false);
  }

  function blurredInput_3() {
    setFocused_3(false);
  }

  function blurredInput_4() {
    setFocused_4(false);
  }

  function focusedInput_1() {
    setFocused_1(true);
  }

  function focusedInput_2() {
    setFocused_2(true);
  }

  function focusedInput_3() {
    setFocused_3(true);
  }

  function focusedInput_4() {
    setFocused_4(true);
  }

  return (
    <div className={style.calculator}>
      <div className={style.header_top}>
        <div className={style.header}>
          <h4>HƏCM ÇƏKİ</h4>
          <h6>KALKULYATORU</h6>
        </div>
        <div className={style.calculator_photo}>
          <img src="https://findex.az/images/calculator.svg" alt="" />
        </div>
      </div>
      <div className={style.header_middle}>
        <div
          className={`${style.input_field} ${
            focused_1 ? style.focused_input_1 : ""
          }`}
        >
          <label htmlFor="weight" className={style.cal_label}>
            Çəki
          </label>
          <input
            onBlur={blurredInput_1}
            onFocus={focusedInput_1}
            maxLength="5"
            id="weight"
            type="text"
            pattern="\d*"
            className={style.cal_input}
            autoComplete="off"
            value={weight}
            onChange={(e) => {
              if (e.target.value === "" || regex.test(e.target.value))
                setWeight(e.target.value);
              isInputZero();
            }}
          />
          <span className={style.cal_value}>KQ</span>
        </div>
        <div
          className={`${style.input_field} ${
            focused_2 ? style.focused_input_2 : ""
          }`}
        >
          <label htmlFor="length" className={style.cal_label}>
            Uzunluq
          </label>
          <input
            onBlur={blurredInput_2}
            onFocus={focusedInput_2}
            maxLength="5"
            id="length"
            type="text"
            pattern="\d*"
            className={style.cal_input}
            autoComplete="off"
            value={length}
            onChange={(e) => {
              if (e.target.value === "" || regex.test(e.target.value))
                setLength(e.target.value);
              isInputZero();
            }}
          />
          <span className={style.cal_value}>SM</span>
        </div>
        <div
          className={`${style.input_field} ${
            focused_3 ? style.focused_input_3 : ""
          }`}
        >
          <label htmlFor="height" className={style.cal_label}>
            Hündürlük
          </label>
          <input
            onBlur={blurredInput_3}
            onFocus={focusedInput_3}
            maxLength="5"
            id="height"
            type="text"
            pattern="\d*"
            className={style.cal_input}
            autoComplete="off"
            value={height}
            onChange={(e) => {
              if (e.target.value === "" || regex.test(e.target.value))
                setHeight(e.target.value);
              isInputZero();
            }}
          />
          <span className={style.cal_value}>SM</span>
        </div>
        <div
          className={`${style.input_field} ${
            focused_4 ? style.focused_input_4 : ""
          }`}
        >
          <label htmlFor="depth" className={style.cal_label}>
            Dərinlik
          </label>
          <input
            onBlur={blurredInput_4}
            onFocus={focusedInput_4}
            maxLength="5"
            id="depth"
            type="text"
            pattern="\d*"
            className={style.cal_input}
            autoComplete="off"
            value={depth}
            onChange={(e) => {
              if (e.target.value === "" || regex.test(e.target.value))
                setDepth(e.target.value);
              isInputZero();
            }}
          />
          <span className={style.cal_value}>SM</span>
        </div>
      </div>
      <div className={style.header_bottom}>
        <div className={style.liquid_check_container}>
          <input
            id="liquid_check"
            className={style.liquid_check_input}
            type="checkbox"
            autoComplete="off"
            checked={isLiquid}
            onChange={liquidCheck}
          />
          <label htmlFor="liquid_check" className={style.liquid_check_label}>
            Məhsulun tərkibində maye var
          </label>
        </div>
        <div className={style.cost}>
          {`$${Math.floor(value)}`}
          <span className={style.float}>
            {`.${value
              .toFixed(2)
              .substring(value.toFixed(2).indexOf(".") + 1)}`}
          </span>
        </div>
        <div className={style.btn_container}>
          <button onClick={makeAllZero} className={style.btn}>
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
