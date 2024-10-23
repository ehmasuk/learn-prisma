function Table({ th, data }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-black">
                <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                        {th.map((e, i) => {
                            return (
                                <th key={i} scope="col" className="px-6 py-3">
                                    {e}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => {
                        return (
                            <tr key={i} className="bg-white border-b">
                                {th.map((e, i) => {
                                    return (
                                        <td key={i} className="px-6 py-4">
                                            {item[e]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
