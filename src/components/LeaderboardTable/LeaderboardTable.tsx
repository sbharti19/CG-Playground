import { auth, firestore } from "@/firebase/firebase";
import { DBUsers } from "@/utils/types/problem";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type LeaderboardTableProps = {
    setLeaderboardData:React.Dispatch<React.SetStateAction<boolean>>;
};

const LeaderboardTable: React.FC<LeaderboardTableProps  > = ({setLeaderboardData}) => {
    const userData = useGetUsersData();
    const userDataSorted = userData.sort((a,b)=>{ return b.solvedProblems.length - a.solvedProblems.length});
    console.log('user data sorted: ', userDataSorted);
    return (<>
        <tbody className='text-white'>
            {userData.sort().map((user, idx) => {
                return (
                    <tr key={idx}>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>
                            { idx + 1}
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium'>
                            { user.solvedProblems.length}
                        </th>
                        <th scope='col' className='px-6 py-3 w-0 font-medium text-dark-green-s'>
                            { user.displayName}
                        </th>
                    </tr>
                );
            })}
        </tbody>
    </>)
};
export default LeaderboardTable;

function useGetUsersData() {
	const [usersDataAll, setUsersData] = useState<DBUsers[]>([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const getUsersData = async () => {
			const q = query(collection(firestore, "users"));
			const querySnapshot = await getDocs(q);
			const tmp: DBUsers[] = [];
			querySnapshot.forEach((doc) => {
                if(doc.data().solvedProblems == 0)
                {
                    return;
                }
				tmp.push({ uid: doc.id, ...doc.data() } as DBUsers);
			});
			setUsersData(tmp);
		};

		if (user) getUsersData();
		if (!user) setUsersData([]);
	}, [user]);

	return usersDataAll;
}