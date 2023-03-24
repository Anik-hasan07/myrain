import React, { Fragment, useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearErrors } from '../../actions/productAction';
// import { updatePassword } from '../../actions/userAction';
// import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
import "./ChangePassword.css";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import Loader from '../layout/Loader/Loader';
// import MetaData from '../layout/MetaData';

const ChangePassword = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { error, isUpdated, loading } = useSelector((state) => state.profile);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePasswordSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);
    
        // dispatch(updatePassword(myForm));
      };

    //   useEffect(() => {
    //     if (error) {
    //       alert(error.message);
    //       dispatch(clearErrors());
    //     }
    
    //     if (isUpdated) {
    //       alert("Profile Updated Successfully");
    
    //       navigate("/account");
    
    //       dispatch({
    //         type: UPDATE_PASSWORD_RESET,
    //       });
    //     }
    //   }, [dispatch, error, isUpdated, navigate]);
return (

        <Fragment>
          {/* <MetaData title="Change Password" /> */}
          <div className="updatePasswordContainer">
            <div className="updatePasswordBox">
              <h2 className="updatePasswordHeading">Update Profile</h2>

              <form
                className="updatePasswordForm"
                onSubmit={updatePasswordSubmit}
              >
                <div className="loginPassword">
                  <VpnKeyIcon />
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}


export default ChangePassword
