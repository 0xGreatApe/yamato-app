import styles from "../styles/InstructionsComponent.module.css";
import { FaTwitter, FaMedium, FaGithub } from "react-icons/fa";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          Yamato<span> Decentralised Voting</span>
        </h1>
        <p>
          Get started by minting tokens here
          <span>/pages/index.js</span>
        </p>
      </header>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"https://createweb3dapp.alchemy.com/#components"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Add Components</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://createweb3dapp.alchemy.com/#templates"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Explore Templates</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"https://docs.alchemy.com/docs/create-web3-dapp"}
        >
          <div className={styles.button}>
            <img
              src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
              width={"20px"}
              height={"20px"}
            />
            <p>Visit Docs</p>
          </div>
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons_container}>
          <a
            href="https://twitter.com/0xGreatApe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://github.com/0xGreatApe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://medium.com/@0xGreatApe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
