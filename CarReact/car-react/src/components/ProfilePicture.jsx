import React, { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

export default function ProfilePicture(props) {

  // const [state, setState] = useState({
  //   image:""
  // })

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   setState((previous) => {
  //     return {
  //       ...previous,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .put(
  //       `http://localhost:3000/user/updateUserProfile/${localStorage.getItem("UserID")}`,props.image,
  //       {
  //         headers: { Authorization: localStorage.getItem("Authorization") },
  //       }
  //     )
  //     .then((req) => {
  //       console.log(req);
  //       if (req.data.Success === true) {
  //         console.log("Success");
  //         // props.history.push("/MyProfile");
  //       } else {
  //         console.log("fail");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#imagePreview").css(
            "background-image",
            "url(" + e.target.result + ")"
          );
          $("#imagePreview").hide();
          $("#imagePreview").fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function () {
      readURL(this);
    });
  }, []);
  return (
    <div className="profpic">
      <div className="container">
        <div className="avatar-upload">
          <div className="avatar-edit">
            <form>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept=".png, .jpg, .jpeg"
                // onChange={handleChange}
              />
              <label for="imageUpload" 
              // onSubmit={handleSubmit}
              ></label>
            </form>
            {/* <Uploady
              destination={{
                url: `http://localhost:3000/user/updateUserProfile/${localStorage.getItem(
                  "UserID"
                )}`,
              }}
            >
              <UploadButton />
            </Uploady> */}
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              style={{ backgroundImage: `url(${props.image})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}