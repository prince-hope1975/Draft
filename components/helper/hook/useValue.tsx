import React, {useState, useReducer} from 'react'
import reducer,{ initialState,  } from '../reducer';

const useValue = () => {
const [isLoading, setLoading] = useState(true);

    const [userLoginStatus, setUserLoginStatus] = useState({} as object);
    const [isConnected, setConnected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [discordID, setDiscordID] = useState<string>("");
    const [githubURL, setGithubURL] = useState<URL | string>("");
    const [twitterHandle, setTwitterHandle] = useState("");
    const [media, setMedia] = useState({isTrue: false, width: 0,})
  
  const [dialog, dispatchDialog] = useReducer(reducer, initialState);

    const value = {
      dialog,
      dispatchDialog,
      isLoading,
      userLoginStatus,
      setUserLoginStatus,
      setLoading,
      isConnected,
      setConnected,
      walletAddress,
      setWalletAddress,
      name,
      setName,
      discordID,
      setDiscordID,
      githubURL,
      setGithubURL,
      twitterHandle,
      setTwitterHandle,
      media, setMedia
    };
  return value
}

export default useValue