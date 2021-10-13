# fetch_render_increment_TS
Task Time. Get data with fetch, render it and fulfill rest of rquirements.

 * #1.
 * Create component that makes two GET requests /api/user and /api/bank-accounts independently of each other.
 * The moment promises are resolved and data is returned, render it's contents, for example email and status first account on the list.
 * Recommend to use async functions returning mock data.
 * Use given interfaces, they cannot be modified.

interface GetUserResponse {
    email: string;
}
interface GetBankAccountsResponse {
    accounts: Array<{
        // Typ number uzyty dla uproszczenia zadania
        balance: number;
    }>;
}

* #2.
* Expand previous component so it can get data from specified endpoint page
* UserDetailsVievProps interface is modified and now has parameter pageNo.
* Modification of fetch functions is required
* Additionally, simple additional component for page switch is recommended but not 'must have'

interface UserDetailsViewProps {
    pageNo: number;
}


 * #3.
 * Expand previous component so it renders all bank accounts from given table.
 * Create two simple buttons:
 * increment button have to add to counter to given account, no request needed.

Final go should not take more than 60 min.
