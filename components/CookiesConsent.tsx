'use client'
import { useEffect, useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

enum Cookies {
  NOT_ANSWERED,
  ACCEPTED,
  DECLINED,
}

const CookiesConsent = () => {
  const [answer, setAnswer] = useState<Cookies>(Cookies.NOT_ANSWERED);

  useEffect(() => {
    const answer = window.localStorage.getItem('cookies');

    switch (answer) {
      case 'yes':
        setAnswer(Cookies.ACCEPTED);
        break;
      case 'no':
        setAnswer(Cookies.DECLINED);
        break;
      default:
        setAnswer(Cookies.NOT_ANSWERED);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem('cookies', 'yes');
    setAnswer(Cookies.ACCEPTED);
  }

  const declineCookies = () => {
    window.localStorage.setItem('cookies', 'no');
    setAnswer(Cookies.DECLINED);
  }

  return (<Popup open={Cookies.NOT_ANSWERED === answer}>
    <div className="flex p-14">
      <p className="mr-14 text-sm">
      Our website uses cookies to enhance your browsing experience and provide personalized services. By continuing to browse, you consent to the use of cookies. You can manage and control cookies in your browser settings. For more information, please refer to our Privacy Policy.
      </p>
      <div className="flex w-64 items-center justify-between">
        <Button onClick={acceptCookies}>
          Accept
        </Button>
        <Button onClick={declineCookies} type="secondary">
          Decline
        </Button>
      </div>
    </div>
  </Popup>);
}

export default CookiesConsent;