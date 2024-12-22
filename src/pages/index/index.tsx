import {grantRoleMinter, mint} from "../contract"
import {useState} from 'react';

const index = ()=>{
  const [addr, setAddr] = useState();
  const [amount, setAmount] = useState();

  const handleAddrChange = (e: any) => {
    setAddr(e.target.value);
  };
  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };
  const handleSubmit = async () => {
    await grantRoleMinter(addr, amount);
  };

  return (
    <div>
      <span>발행 권한 주기(관리자만 가능)</span>
      <input type="text" placeholder="주소를 입력하세요." onChange={handleAddrChange} />
      <input type="text" placeholder="Ecoin 양을 입력하세요." onChange={handleAmountChange} />
      <button onClick={handleSubmit}></button>
    </div>
  )
};

export default index;
