import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Skeleton from "@mui/material/Skeleton";

import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import HttpIcon from "@mui/icons-material/Http";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

export const UserDetailsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
  
        (async () => {
            const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(data);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    })();
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen py-10 px-5 ">
      <Card
        // sx={{ width: "50%" }}
        className="flex w-[90%] md:!w-[80%] lg:!w-[50%] justify-center  flex-col items-center !rounded-3xl pt-4 pb-5"
      >
        <CardContent className="flex flex-col items-center gap-2 w-full">
          <div className="flex gap-2 w-full justify-start ">
          <Button variant="outlined"  
              sx={{ color: "#3f51b5" }}
          className="!rounded-full"
          startIcon={<KeyboardBackspaceIcon />} onClick={()=>navigate("/")}>
        Go Back
      </Button>
                 </div>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={100}
              height={100}
            />
          ) : (
            <Avatar
              className="!text-2xl !font-medium "
              sx={{
                bgcolor: "#3f51b5",
                width: 100,
                height: 100,
                color: "#fff",
              }}
            >{`${user.name.split(" ")[0].charAt(0)}`}</Avatar>
          )}
          {loading ? (
            <Skeleton
              animation="wave"
              variant="text"
              width="200px"
              sx={{ fontSize: "22px" }}
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography sx={{ fontSize: "22px", color: "#3f51b5" }}>
              {user.name}
            </Typography>
          )}
          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <PersonIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Full Name
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>{user?.name}</Typography>
              </div>
            )}
          </div>

          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <PersonIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Username
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>
                  {user?.username}
                </Typography>
              </div>
            )}
          </div>

          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <EmailIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Email
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>{user?.email}</Typography>
              </div>
            )}
          </div>

          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <PhoneIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Phone
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>{user?.phone}</Typography>
              </div>
            )}
          </div>
          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <BusinessIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Company
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>
                  {user?.company.name}
                </Typography>
              </div>
            )}
          </div>

          <Divider sx={{ width: "100%" }} />

          <div className="flex  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/2">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <HttpIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Website
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-1/2 justify-end flex">
                <Typography sx={{ color: "#3f51b5" }}>
                  {user?.website}
                </Typography>
              </div>
            )}
          </div>

          <Divider sx={{ width: "100%" }} />

          <div className="flex items-center  justify-between w-full px-1 lg:px-4">
            <div className="flex justify-start gap-3 w-1/3">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="150px"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                <>
                  <HomeIcon sx={{ color: "#3f51b5" }} />
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Address
                  </Typography>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <div className="w-2/3 justify-end flex flex-col">
                <div className="flex gap-4 w-full justify-end   ">
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Street :
                  </Typography>
                  <Typography sx={{ color: "#3f51b5" }}>
                    {user?.address.street}
                  </Typography>
                </div>
                <div className="flex gap-4 w-full justify-end      ">
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    Suite :
                  </Typography>
                  <Typography sx={{ color: "#3f51b5" }}>
                    {user?.address.suite}
                  </Typography>
                </div>

                <div className="flex gap-4 w-full justify-end   ">
                  <Typography sx={{ color: "#3f51b5", fontWeight: "bold" }}>
                    City :
                  </Typography>
                  <Typography sx={{ color: "#3f51b5" }}>
                    {user?.address.city}
                  </Typography>
                </div>
                <div className="flex gap-4 w-full justify-end   ">


              <Typography
              
              sx={{ color: "#3f51b5", fontWeight:'bold' }}
              >Zip Code :</Typography>
              <Typography
              
              sx={{ color: "#3f51b5" }}
              >{user?.address.zipcode}</Typography>

              </div>

              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
