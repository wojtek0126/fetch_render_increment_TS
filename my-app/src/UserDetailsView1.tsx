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

export const UserDetailsView = (props: UserDetailsViewProps) => {
    
    const userAPI: string = "http://localhost:3000/user";
    const accountAPI: string = "http://localhost:3000/accounts";

    const [users, setUsers] = useState<GetUserResponse[] | []>([]);

    const [accountData, setAccountData] = useState([]);    

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

users.map((user: GetUserResponse) => {    
   usersArr.push(user.email);  
});

// problem with interface
accountData.map((accountData: any) => {
    accountsArr.push(accountData.balance);     
});

  
      return (<>      
    <p>{usersArr[0]}</p>
    <p>{accountsArr[1]}</p>
      </>);
};


export default UserDetailsView;