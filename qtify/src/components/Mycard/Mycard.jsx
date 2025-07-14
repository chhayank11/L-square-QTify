import { Chip, Typography } from "@mui/material";
import styles from "./Mycard.module.css";

function Mycard({ card, type }) {
  return (
    <div className={styles.card}>
      {/* Top Section (Image + Chip) */}
      <div className={styles.topSection}>
        <img src={card.image} alt="product" className={styles.image} />
        <div className={styles.chipSection}>
          <Chip
            label={
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "11px",
                  color: "white",
                }}
              >
                {type === "album"
                  ? `${Number(card.follows / 1000).toFixed(1)}k Follows`
                  : `${Number(card.likes / 1000).toFixed(1)}k Likes`}

                {/* {Number(card.follows / 1000).toFixed(1)}k Follows */}
              </Typography>
            }
            sx={{
              width: "71px",
              height: "23px",
              backgroundColor: "black",
              borderRadius: "10px",
              gap: "1px",
              marginLeft: "6px",
            }}
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className={styles.bottomText}>
        <Typography variant="body2">{card.title}</Typography>
      </div>
    </div>
  );
}
export default Mycard;
