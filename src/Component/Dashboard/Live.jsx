import { useState } from "react";
import styles from "./Live.module.css";
import { LiveEdit } from "./LiveEdit";

function Live() {
  const initial = {
    category: "Category",
    orgainsation: "Oraganisation Name",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAJ1BMVEXIyMivr6+tra3FxcW2traysrK7u7vBwcG+vr7GxsaxsbG1tbW5ubnPcSqzAAAExUlEQVR4nO3d7XKDIBCF4ShqNMn9X28T06aACywflrOdfX+3MzxjNUYLXAbxXXoPoL6dMIrth2A2I7TNvAnjdhHbNr4JpvdAyjNhglmXxzQ9lhWcFyKs9/Fzuo/DdO0yOF40YfEvWuMNF0ERrtSVd5xRz3iC8BgpwjPQA3EkzMGPwHHpONBwB0JYgGrwCTHB88fWroOl8wiPqOD5c4Dng0u4hs7k3zqPl8glJAHDMHUe8DGHcPhEo/6U4G43HAJDAHgYbMLKIoy9h+xnE+4swoB2YbUJ6cvR3r33mL0sguEJ4K6rFoF3KuCdDBaBc0ndA7usWoTUzcUnsJsMizApoVf/6w+Jezqj3SX9r4uqYX4633qP2cu+wWAehUfvMXvZBOYlCexsdgiMr52veg/Zz/nKc+MI4B7EOISVcxh6j/iQ+/U//hQJ8yB4hPR1de48XiLvUVjyTwnw8bb/QDL4WHsP7d5i7/BYOGZAfBxJPZxfwgbEY0C+IiFf8jy7AZ4Hr8h3bXfiQGC+W3hFvy40BwTavZ1V6KXtttzHb8Y4TGgP8Jwir84v5rqu6/UKegp8ihGEpASElICQEhBSAkJKQEgJCCkBISUgpASElICQEhBSAkJKQEgJCCkBISUgpASElICQEhBSAkJKQEgJCCkBISUgpASElICQVMLtd8BCCTdrxDIJN/uf4EUSZucf+SUSPjOOfmfvCCNYc6b2UcsjOLO+XsMWR/DmrRl5BH/m3SSOcJg7KI5wnP0ojUDM3xRGoGagyiKQc2hFEehZwJIIgXnMggihmdhyCMG55GII4dnwUgiR+fxCCLEVCWQQogvJiSDEl8KTQEgs5ieAkFqOEJ+QXFARnpBeEhKdwFjUEpzAWZYTm8BaWBSawFsaFZnAXNwVmMAUABO4AlwCWwBL4AtQCRkCUAJ7UVRYQpYAkpAnQCRkCgAJuQI8QrYAjpAvQCMUCMAIJQIsQpEAilAmQCIUCoAIpQIcQrEAhlAuQCFUCEAI7B0HYAlVAghCnQCBUCkAIMQXlJZAqBZ0J9QLehMaCDoTWgjaEJbC7QyaCJoQlrFsf5U2ghaEfXn3AkMjQQPC9wL12YZWgnrCZ4n9TEMzQTXB2iQgy9BOUEtwtjnIMES2R/hjgjcStqGloI5wGAnT0FRQRSA2XmEZ2gpqCOTWMQxDY0EFIbD5TdLQWlBOCG7fkzA0FxQTIhsQRQ3tBaWE6BZKkR2gThAUEhKbQAWPwxmCMkJyG6vAcThFUERg7OlGGs4RlBBYu9IRhpMEBQSWgDCcJcgnMAUHw2mCbAJb4BnOE+QSMgSO4URBJiFLYBkyfy+vLEL2SOY/EGQRCkYyny/IIRSNZD5dkEEoHMl8toBPYG7Y2yEuAVfAJQALmARkAY8ALWARsAUcAriAQUAXpAnwgiQBX5AiCBAkCBIEcYIIQZQgQxAjCBFECFIEYYIYQZAgRxAiCBIECJIENEGUgCQYUQKKIExAEKQJjgRxggNBnsAnCBR4BFlX0+9cQs1kjm4pASElIKQEhJSAkBIQUgJCSkBICQgpASElIKQEhJSAkBIQUgJCSkBICQi5hGUS2NJ7ZZ4m/RC23gMpb3sTBrMZoW1meBOGUWzDD0F2/4DwBbBzaYqf/U92AAAAAElFTkSuQmCC",
    goal: 0,
    raised: 25,
    title: "Your Event Name",
    donationTarget: 100,
  };
  const [data, setData] = useState(initial);
  const handleAll = (item) => {
    setData({ ...data, ...item });
  };
  return (
    <div className={styles.Con}>
      <LiveEdit data={data} />
    </div>
  );
}
export { Live };
