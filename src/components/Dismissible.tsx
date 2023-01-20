import { useState } from "react";
import "./Dismissible.css";

type Dismissible = {
  headline: string;
  description?: string;
  feedbackUrl?: string;
};

export default function Dismissible({
  headline,
  description,
  feedbackUrl,
}: Dismissible) {
  const [isDismissed, setDismissed] = useState(false);
  const handleDismiss = () => {
    setDismissed(true);
  };
  return (
    <>
      {!isDismissed && (
        <div className="Card">
          <button className="CloseButton" onClick={handleDismiss}>
            <span aria-hidden="true">&times;</span>
          </button>
          <p>
            <strong>{headline}</strong>
          </p>
          {description && <p>{description}</p>}
          {feedbackUrl && (
            <small>
              <a href={feedbackUrl}>Send feedback</a>
            </small>
          )}
        </div>
      )}
    </>
  );
}
