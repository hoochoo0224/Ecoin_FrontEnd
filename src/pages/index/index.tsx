import {grantRoleMinter} from "../contract"
import {useState, useEffect} from 'react';

import styles from './index.module.scss'

const index = ()=>{
  const [addr, setAddr] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [admin, setAdmin] = useState<string>('');

  useEffect(()=>{
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
      });
      setAdmin(accounts?.[0]);
    }
  });

  const checkAdmin = (addr: string) => {
    if (addr === "0xf456dF9E429B405aF769A235d158E8a926f7df86") {
      return true;
    } else {
      return false;
    }
  };

  const handleAddrChange = (e: any) => {
    setAddr(e.target.value);
  };
  
  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async () => {
    if checkAdmin(admin) {
      await grantRoleMinter(addr, amount);
    }
  };

  return (
    <div className={styles.index}>
      <span className={styles.title}>발행 권한 주기(관리자만 가능)</span>
      <input className={styles.addr} type="text" placeholder="주소를 입력하세요." onChange={handleAddrChange} />
      <input className={styles.amount} type="text" placeholder="Ecoin 양을 입력하세요." onChange={handleAmountChange} />
      <button className={styles.submit} onClick={handleSubmit}>발행 권한 주기</button>
    </div>
  )
};

export default index;
