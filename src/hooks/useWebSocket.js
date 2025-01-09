import { useEffect, useRef, useState } from "react";

export const useWebSocket = (url) => {
  const ws = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      setIsConnected(true);
    };

    ws.current.onclose = () => {
      setIsConnected(false);
    };

    ws.current.onmessage = (event) => {
      setMessage(JSON.parse(event.data));
    };

    return () => {
      ws.current.close();
    };
  }, [url]);

  const sendMessage = (data) => {
    if (ws.current && isConnected) {
      ws.current.send(JSON.stringify(data));
    }
  };

  return { isConnected, message, sendMessage };
};
