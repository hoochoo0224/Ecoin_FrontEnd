const API_BASE_URL = 'https://port-0-ecoin-backend-m3x1zrsv043003ce.sel4.cloudtype.app/';

export const grantRoleMinter = async (account: string, amount: number)=>{
  const formData = new FormData();
  formData.append('account', account);
  formData.append('amount', amount.toString());

  await fetch(`${API_BASE_URL}/api/grant-role-minter`, {
    method: 'POST',
    body: formData
  });
};

export const mint = async (to: string, amount: number) => {
  const formData = new FormData();
  formData.append('to', to);
  formData.append('amount', amount.toString());

  await fetch(`${API_BASE_URL}/api/mint`, {
    method: 'POST',
    body: formData
  })
};
