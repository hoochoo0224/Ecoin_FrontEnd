import {mint} from '../contract.ts'
import {useState} from 'react';

import styles from './index.module.scss'

const Minter = ()=>{
  const [to, setTo] = useState<string>('');
  const [amount, setAmount] = useState<string>(''); 

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async () => {
    await mint(to, amount);
  };
  
  return (
    <div className={styles.Minter}>
      <span className={styles.title}>발행하기(Minter 권한만 가능)</span>
      <input className={styles.amount} type="text" placeholder="발행할 Ecoin 양을 입력하세요" onChange={handleAmountChange} />
      <button className={styles.submit} onClick={handleSubmit}>발행하기</button>
    </div>
  );
};

export default Minter;
