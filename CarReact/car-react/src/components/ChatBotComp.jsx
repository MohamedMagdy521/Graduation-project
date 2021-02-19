import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";


export default function ChatBotComp() {
  
  const [userInfo, setUserInfo] = useState({
    userKM:0,
    userOilType:0,
  })

  useEffect(() => {
    // const { fullUserAnswer,fullAnswerOptions } = steps;
    // setUserInfo({ fullUserAnswer, fullAnswerOptions });
    // console.log(steps.fullAnswerOptions);
    // console.log(steps[7].options.value);
    console.log(userInfo);
  });


  // const [userKMM, setuserKMM] = useState(5);
  // const [userOIL, setuserOIL] = useState(5);

    Review.propTypes = {
      steps: PropTypes.object,
    };

    Review.defaultProps = {
      steps: undefined,
    };

    const theme = {
      background: "#f5f8fb",
      fontFamily: "Helvetica Neue",
      headerBgColor: "#EF6C00",
      headerFontColor: "#fff",
      headerFontSize: "15px",
      botBubbleColor: "#EF6C00",
      botFontColor: "#fff",
      userBubbleColor: "#fff",
      userFontColor: "#4a4a4a",
    };

    const steps = [
      {
        id: "1",
        message: "Hi I am Dreksyony Bot \u{1F64B}",
        trigger: "2",
      },
      {
        id: "2",
        message: "How can we help you?",
        trigger: "3",
      },
      {
        id: "3",
        options: [
          { value: 1, label: "Contact Us", trigger: "4" },
          // { value: 2, label: "Specific Maintenance", trigger: "5" },
          { value: 3, label: "Full Maintenance", trigger: "full" },
        ],
      },
      {
        id: "4",
        component: (
          <Link to="/ContactUs">
            <span style={{ color: "blue" }}>Click Here to contact us</span>
          </Link>
        ),
        trigger: "2",
      },
      // {
      //   id: "5",
      //   options: [
      //     { value: 1, label: "Oil", trigger: "Oil" },
      //     { value: 2, label: "Spark Plugs", trigger: "Spark" },
      //     { value: 3, label: "Belts", trigger: "Belts" },
      //     { value: 4, label: "Oil Filter", trigger: "OilFilter" },
      //     { value: 5, label: "Air Filter", trigger: "AirFilter" },
      //     { value: 6, label: "Fuel Filter", trigger: "FuelFilter" },
      //     { value: 7, label: "Brake Pad", trigger: "Brake" },
      //     { value: 8, label: "Tires", trigger: "Tires" },
      //   ],
      // },
      // {
      //   id: "Oil",
      //   message: "How can we help you?",
      //   trigger: "3",
      // },

      {
        id: "full",
        message: "How many kilometres are on the odometer?",
        trigger: "fullUserAnswer",
      },
      {
        id: "fullUserAnswer",
        user: true,
        validator: (value) => {
          if (isNaN(value)) {
            value = "";
            return "value should be a number";
          }
          return true;
        },
        trigger: "fullAnswerOptions",
      },
      {
        id: "fullAnswerOptions",
        message: "What type of Oil do you purchase ?",
        trigger: "fullAnswerOptionsChoices",
      },
      {
        id: "fullAnswerOptionsChoices",
        options: [
          { value: 3, label: "3 Km", trigger: "Check" },
          { value: 5, label: "5 Km", trigger: "Check" },
          { value: 7, label: "7 Km", trigger: "Check" },
          { value: 10, label: "10 Km", trigger: "Check" },
          { value: 15, label: "15 Km", trigger: "Check" },
        ],
      },
      {
        id: "Check",
        message: "Calculating your maintenance...",
        trigger: "Final",
      },
      {
        id: "Final",
        component: <Review />,
        trigger: "3",
      },
    ];
    // const { name, gender, age } = steps;

    
    return (
      <>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            floating={true}
            headerTitle="Dreksyony chat bot"
            userAvatar={localStorage.getItem("ProfileImage")}
            // botAvatar={localStorage.getItem("ProfileImage")}
          />
          ;
        </ThemeProvider>
      </>
    );
}


function Review(props) {
  const [userCarInfo, setUserCarInfo] = useState({
    fullAnswerOptionsChoices: 0,
    fullUserAnswer: 0,
  });
  useEffect(() => {
    const { steps } = props;
    const { fullAnswerOptionsChoices, fullUserAnswer } = steps;
    setUserCarInfo({ fullAnswerOptionsChoices, fullUserAnswer });
    // this.setState({ name, gender, age });
    // console.log(props);
    // console.log(steps);
    // console.log(fullAnswerOptionsChoices);
    // console.log(fullAnswerOptionsChoices.value);
    // console.log(fullUserAnswer);
    // console.log(fullUserAnswer.value);
    // console.log(userCarInfo);
  }, [])
  const { fullAnswerOptionsChoices, fullUserAnswer } = userCarInfo;
  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Your Meters</td>
            <td>{parseInt(fullUserAnswer.value) + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Oil</td>
            <td>at: {parseInt(fullUserAnswer.value) + (parseInt(fullAnswerOptionsChoices.value) * 1000) + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Oil Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 10000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Air Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Fuel Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Spark Plugs</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Tires</td>
            <td>at: {parseInt(fullUserAnswer.value) + 50000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Check Brake Pads</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Check Belts</td>
            <td>From: {(parseInt(fullUserAnswer.value) + 60000) + "m" + " \nTo " + (parseInt(fullUserAnswer.value) + 100000) + "m"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Review2(props) {
  const [userCarInfo, setUserCarInfo] = useState({
    fullAnswerOptionsChoices: 0,
    fullUserAnswer: 0,
  });
  useEffect(() => {
    const { steps } = props;
    const { fullAnswerOptionsChoices, fullUserAnswer } = steps;
    setUserCarInfo({ fullAnswerOptionsChoices, fullUserAnswer });
    // this.setState({ name, gender, age });
    // console.log(props);
    // console.log(steps);
    // console.log(fullAnswerOptionsChoices);
    // console.log(fullAnswerOptionsChoices.value);
    // console.log(fullUserAnswer);
    // console.log(fullUserAnswer.value);
    // console.log(userCarInfo);
  }, []);
  const { fullAnswerOptionsChoices, fullUserAnswer } = userCarInfo;
  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Your Meters</td>
            <td>{parseInt(fullUserAnswer.value) + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Oil</td>
            <td>
              at:{" "}
              {parseInt(fullUserAnswer.value) +
                parseInt(fullAnswerOptionsChoices.value) * 1000 +
                "m"}
            </td>
          </tr>
          <br />
          <tr>
            <td>Change Oil Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 10000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Air Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Fuel Filter</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Spark Plugs</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Change Tires</td>
            <td>at: {parseInt(fullUserAnswer.value) + 50000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Check Brake Pads</td>
            <td>at: {parseInt(fullUserAnswer.value) + 20000 + "m"}</td>
          </tr>
          <br />
          <tr>
            <td>Check Belts</td>
            <td>
              From:{" "}
              {parseInt(fullUserAnswer.value) +
                60000 +
                "m" +
                " \nTo " +
                (parseInt(fullUserAnswer.value) + 100000) +
                "m"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
