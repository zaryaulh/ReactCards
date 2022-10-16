import React from "react";
import { Card as MaterialCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

import { Button } from "./Button";

export const Card = ({user}) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <Avatar
        className="text-lg font-medium top-[35px]"
        sx={{ bgcolor: "#3f51b5", width: 70, height: 70, color: "#fff" }}
      >{`${user.name.split(" ")[0].charAt(0)}`}</Avatar>
      <MaterialCard
        sx={{ minWidth: 275 }}
        className="flex justify-center flex-col items-center !rounded-3xl pt-10 pb-5"
      >
        <CardContent className="flex flex-col items-center gap-2">
          <Typography variant="h5">{user.name}</Typography>
          <Chip label={`@${user.email}`} />
        </CardContent>
        <CardActions>
          <Button userId={user.id}/>
        </CardActions>
      </MaterialCard>
    </div>
  );
};
