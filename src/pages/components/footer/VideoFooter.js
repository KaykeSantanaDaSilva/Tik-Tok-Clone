import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_icon" />
          <div className="videoFooterMusic_text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="VideoFooter_record"
          alt="Imagem de um vinil girando"
          src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        />
      </div>
    </div>
  );
}

export default VideoFooter;
