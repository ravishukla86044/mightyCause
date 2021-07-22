import styles from "./LiveEdit.module.css";
import styled from "styled-components";

function LiveEdit({ data }) {
  const Progress = styled.div`
    width: ${Number((data.raised / data.donationTarget) * 100)}%;
    background: rgb(118, 152, 255);
    position: absolute;
    height: 100%;
    border-radius: 18px;
  `;

  return (
    <div className={styles.Con}>
      <div className={styles.content}>
        <div className={styles.account}></div>
        <div>
          <button className={styles.category}>{data.category}</button>
          <span class="material-icons-outlined">mode_edit</span>
        </div>
        <div>
          <div className={styles.imgDiv}>
            <div className={styles.pic}>
              <img src={data.img} alt="" />
            </div>
            <span class=" material-icons-outlined ">mode_edit</span>
          </div>
          <div className={styles.title}>
            <div>
              <h1>
                {data.title} <span class="material-icons-outlined">mode_edit</span>
              </h1>
            </div>
          </div>
          <div className={styles.org}>
            <p>An Event for - {data.orgainsation}</p>
          </div>
        </div>
        <div>
          <button className={styles.editTheme}>
            <span class=" material-icons-outlined ">mode_edit</span>Edit Theme
          </button>
        </div>
      </div>
      <div className={styles.eventProgress}>
        <div>
          <h1>{`$ ${data.raised} raised`}</h1>
          <p>
            FUNDRAISING DEADLINE <span class="material-icons-outlined">mode_edit</span>
          </p>
        </div>
        <div>
          <div className={styles.progressBarCon}>
            <Progress />
            <p>{`$ ${data.donationTarget} GOAL`}</p>
          </div>
          <span class="material-icons-outlined">mode_edit</span>
        </div>
        <div className={styles.lastbutton}>
          <button>DONATE</button>
          <button>JOIN THIS EVENT</button>
        </div>
      </div>
    </div>
  );
}
export { LiveEdit };
