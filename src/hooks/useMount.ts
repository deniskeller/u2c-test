//@ts-nocheck
import { useEffect, useState } from "react";

export const useMount  = ({ opened }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, 300);
    }
  }, [mounted, opened]);

  return {
    mounted,
  };
};