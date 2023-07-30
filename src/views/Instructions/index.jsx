import React from "react";
import Rules from "../../data/Rules.json";

const Instructions = () => {
	return (
		<div className="py-[20px] px-[50px]">
			<div className="w-full flex flex-col text-center justify-center">
				<div className="text-2xl font-semibold">
					Official Rules and Regulations
				</div>
				<div>Mini Hackathon 2023</div>
			</div>
			<div className="grid gap-[30px]">
				{Rules.data ? (
					Rules.data.map((item) => (
						<div key={item.title} className="grid gap-[10px]">
							<div className="uppercase font-bold">{item.title}</div>
							<div>{item.description}</div>
							<div className="w-full flex justify-center">
								<table className="border border-black border-2 max-w-[600px]">
									{item.table ? (
										item.table.map((row, index) => (
											<tr
												key={row.col1}
												className={index == 0 ? "font-bold" : ""}
											>
												<td className="border border-black border-2 px-[20px] py-[10px]">
													{row.col1}
												</td>
												<td className="border border-black border-2 px-[20px] py-[10px]">
													{row.col2}
												</td>
												<td className="border border-black border-2 px-[20px] py-[10px]">
													{row.col3}
												</td>
												<td className="border border-black border-2 px-[20px] py-[10px]">
													{row.col4}
												</td>
											</tr>
										))
									) : (
										<></>
									)}
								</table>
							</div>
							{item.note ? (
								<div className="text-center w-full italic font-semibold">
									{item.note}
								</div>
							) : (
								<></>
							)}
							<ul className="list-disc">
								{item.points ? (
									item.points.map((point) => <li key={point}>{point}</li>)
								) : (
									<></>
								)}
							</ul>
							<ol className="list-decimal">
								<div className="grid gap-[20px]">
									{item.number ? (
										item.number.map((topic) => (
											<div>
												<li>{topic.title}</li>
												<ol className="list-disc pl-[20px]">
													{topic.points ? (
														topic.points.map((points) => <li>{points}</li>)
													) : (
														<></>
													)}
												</ol>
											</div>
										))
									) : (
										<></>
									)}
								</div>
							</ol>
							<div>{item.postDescription}</div>
						</div>
					))
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Instructions;
