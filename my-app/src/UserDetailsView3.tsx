import { useEffect, useState } from "react";

interface GetUserResponse {
    email: string;
}

interface GetBankAccountsResponse {
    accounts: Array<{
        balance: number;
    }>;
}

interface UserDetailsViewProps {}

export const UserDetailsView3 = (props: UserDetailsViewProps) => {
    
    const userAPI: string = "http://localhost:3000/user";
    const accountAPI: string = "http://localhost:3000/accounts";

    const [users, setUsers] = useState<GetUserResponse[] | []>([]);

    const [accountData, setAccountData] = useState<any[]>([]);    

    useEffect(() => {
        fetchData(setUsers, userAPI);
        fetchData(setAccountData, accountAPI);
     }, []);

async function fetchData(setCallback: any, API: string) {   
    await fetch(API, {
        //mode: "no-cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        return response.json();        
    })
    .then(data => {
        setCallback(data);
    })
    .catch(error => {
        console.log(error);
    });
        }; 

 let usersArr: string[] = [];
 let accountsArr: string[] = []; 

users.map(user => {    
   usersArr.push(user.email);  
});

accountData.map((accountData: any) => {
    accountsArr.push(accountData.balance);     
});

const handleRemove = (id: any) => {
    const newAccounts = accountData.filter((account: any) => account.id !== id); 

    setAccountData(newAccounts);
  };
  const handleIncrement =(id: any)=> {
    var index = accountData.findIndex((x: any)=> x.id === id);
  
    let g: any = accountData[index]
    g.balance++ 
    //  g.balance++ 
    if (index === -1){
      // handle error
      console.log('sorry, could not find Your account at this moment')
    }
    else
      setAccountData([
        ...accountData.slice(0,index),
        g,
        ...accountData.slice(index+1)
      ]
              );
  }
  
      return (<>      
    <p>{usersArr[0]}</p>
    <p>{accountsArr[1]}</p>

        
    {accountData.map((account: any) => {

        return <div key={account}>
            {account.balance}
            <button onClick={() => handleRemove(account.id)}>delete</button> 
            <button onClick={() => handleIncrement(account.id)}>increment</button>  
            </div>;  
                  
        
       
    })}
      </>);
};


export default UserDetailsView3;