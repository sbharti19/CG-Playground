type ProblemsTableProps = {};

const LeaderboardTable: React.FC<ProblemsTableProps> = () => {
    return (<>
        <tbody className='text-white'>
            <tr>
                <th scope='col' className='px-1 py-3 w-0 font-medium'>
                    1
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                    1
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium text-dark-green-s'>
                    John Patrick
                </th>
            </tr>
        </tbody>
    </>)
};
export default LeaderboardTable;