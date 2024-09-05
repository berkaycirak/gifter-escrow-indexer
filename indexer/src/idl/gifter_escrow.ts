export type GifterEscrow = {
	address: '5Sbxcm5UTTyKMhB9sNvmSYCwF7FCNVm3wdZkf7fPhWTk';
	metadata: {
		name: 'gifterEscrow';
		version: '0.1.0';
		spec: '0.1.0';
		description: 'Created with Anchor';
	};
	instructions: [
		{
			name: 'createEscrow';
			discriminator: [253, 215, 165, 116, 36, 108, 68, 80];
			accounts: [
				{
					name: 'maker';
					writable: true;
					signer: true;
				},
				{
					name: 'mintA';
				},
				{
					name: 'mintB';
				},
				{
					name: 'makerTokenAccountA';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'gifterEscrowState';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [
									103,
									105,
									102,
									116,
									101,
									114,
									95,
									101,
									115,
									99,
									114,
									111,
									119,
								];
							},
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'arg';
								path: 'escrowId';
							},
						];
					};
				},
				{
					name: 'escrowVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'gifterEscrowState';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'systemProgram';
					address: '11111111111111111111111111111111';
				},
				{
					name: 'associatedTokenProgram';
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
				},
				{
					name: 'tokenProgram';
				},
			];
			args: [
				{
					name: 'escrowId';
					type: 'u64';
				},
				{
					name: 'depositAmount';
					type: 'u64';
				},
				{
					name: 'makerExpectedPrice';
					type: 'u64';
				},
			];
		},
		{
			name: 'refund';
			discriminator: [2, 96, 183, 251, 63, 208, 46, 46];
			accounts: [
				{
					name: 'maker';
					writable: true;
					signer: true;
				},
				{
					name: 'mintA';
				},
				{
					name: 'makerTokenAccountA';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'gifterEscrowState';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [
									103,
									105,
									102,
									116,
									101,
									114,
									95,
									101,
									115,
									99,
									114,
									111,
									119,
								];
							},
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'account';
								path: 'gifter_escrow_state.escrow_id';
								account: 'gifterEscrow';
							},
						];
					};
				},
				{
					name: 'escrowVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'gifterEscrowState';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'systemProgram';
					address: '11111111111111111111111111111111';
				},
				{
					name: 'associatedTokenProgram';
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
				},
				{
					name: 'tokenProgram';
				},
			];
			args: [];
		},
		{
			name: 'takeAndClose';
			discriminator: [81, 156, 163, 250, 235, 93, 76, 141];
			accounts: [
				{
					name: 'maker';
					writable: true;
				},
				{
					name: 'taker';
					writable: true;
					signer: true;
				},
				{
					name: 'mintA';
				},
				{
					name: 'mintB';
				},
				{
					name: 'makerTokenAccountB';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintB';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'takerTokenAccountA';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'taker';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'takerTokenAccountB';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'taker';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintB';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'gifterEscrowState';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [
									103,
									105,
									102,
									116,
									101,
									114,
									95,
									101,
									115,
									99,
									114,
									111,
									119,
								];
							},
							{
								kind: 'account';
								path: 'maker';
							},
							{
								kind: 'account';
								path: 'gifter_escrow_state.escrow_id';
								account: 'gifterEscrow';
							},
						];
					};
				},
				{
					name: 'escrowVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'gifterEscrowState';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mintA';
							},
						];
						program: {
							kind: 'const';
							value: [
								140,
								151,
								37,
								143,
								78,
								36,
								137,
								241,
								187,
								61,
								16,
								41,
								20,
								142,
								13,
								131,
								11,
								90,
								19,
								153,
								218,
								255,
								16,
								132,
								4,
								142,
								123,
								216,
								219,
								233,
								248,
								89,
							];
						};
					};
				},
				{
					name: 'systemProgram';
					address: '11111111111111111111111111111111';
				},
				{
					name: 'associatedTokenProgram';
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
				},
				{
					name: 'tokenProgram';
				},
			];
			args: [];
		},
	];
	accounts: [
		{
			name: 'gifterEscrow';
			discriminator: [233, 223, 61, 92, 104, 68, 94, 120];
		},
	];
	events: [
		{
			name: 'completeEvent';
			discriminator: [95, 114, 97, 156, 212, 46, 152, 8];
		},
	];
	types: [
		{
			name: 'completeEvent';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'maker';
						type: 'pubkey';
					},
					{
						name: 'taker';
						type: 'pubkey';
					},
				];
			};
		},
		{
			name: 'gifterEscrow';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'escrowId';
						type: 'u64';
					},
					{
						name: 'makerExpectedPrice';
						type: 'u64';
					},
					{
						name: 'maker';
						type: 'pubkey';
					},
					{
						name: 'mintA';
						type: 'pubkey';
					},
					{
						name: 'mintB';
						type: 'pubkey';
					},
					{
						name: 'bump';
						type: 'u8';
					},
				];
			};
		},
	];
};

export const IDL: GifterEscrow = {
	address: '5Sbxcm5UTTyKMhB9sNvmSYCwF7FCNVm3wdZkf7fPhWTk',
	metadata: {
		name: 'gifterEscrow',
		version: '0.1.0',
		spec: '0.1.0',
		description: 'Created with Anchor',
	},
	instructions: [
		{
			name: 'createEscrow',
			discriminator: [253, 215, 165, 116, 36, 108, 68, 80],
			accounts: [
				{
					name: 'maker',
					writable: true,
					signer: true,
				},
				{
					name: 'mintA',
				},
				{
					name: 'mintB',
				},
				{
					name: 'makerTokenAccountA',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'gifterEscrowState',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'const',
								value: [
									103, 105, 102, 116, 101, 114, 95, 101, 115, 99, 114,
									111, 119,
								],
							},
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'arg',
								path: 'escrowId',
							},
						],
					},
				},
				{
					name: 'escrowVault',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'gifterEscrowState',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'systemProgram',
					address: '11111111111111111111111111111111',
				},
				{
					name: 'associatedTokenProgram',
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
				},
				{
					name: 'tokenProgram',
				},
			],
			args: [
				{
					name: 'escrowId',
					type: 'u64',
				},
				{
					name: 'depositAmount',
					type: 'u64',
				},
				{
					name: 'makerExpectedPrice',
					type: 'u64',
				},
			],
		},
		{
			name: 'refund',
			discriminator: [2, 96, 183, 251, 63, 208, 46, 46],
			accounts: [
				{
					name: 'maker',
					writable: true,
					signer: true,
				},
				{
					name: 'mintA',
				},
				{
					name: 'makerTokenAccountA',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'gifterEscrowState',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'const',
								value: [
									103, 105, 102, 116, 101, 114, 95, 101, 115, 99, 114,
									111, 119,
								],
							},
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'account',
								path: 'gifter_escrow_state.escrow_id',
								account: 'gifterEscrow',
							},
						],
					},
				},
				{
					name: 'escrowVault',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'gifterEscrowState',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'systemProgram',
					address: '11111111111111111111111111111111',
				},
				{
					name: 'associatedTokenProgram',
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
				},
				{
					name: 'tokenProgram',
				},
			],
			args: [],
		},
		{
			name: 'takeAndClose',
			discriminator: [81, 156, 163, 250, 235, 93, 76, 141],
			accounts: [
				{
					name: 'maker',
					writable: true,
				},
				{
					name: 'taker',
					writable: true,
					signer: true,
				},
				{
					name: 'mintA',
				},
				{
					name: 'mintB',
				},
				{
					name: 'makerTokenAccountB',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintB',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'takerTokenAccountA',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'taker',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'takerTokenAccountB',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'taker',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintB',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'gifterEscrowState',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'const',
								value: [
									103, 105, 102, 116, 101, 114, 95, 101, 115, 99, 114,
									111, 119,
								],
							},
							{
								kind: 'account',
								path: 'maker',
							},
							{
								kind: 'account',
								path: 'gifter_escrow_state.escrow_id',
								account: 'gifterEscrow',
							},
						],
					},
				},
				{
					name: 'escrowVault',
					writable: true,
					pda: {
						seeds: [
							{
								kind: 'account',
								path: 'gifterEscrowState',
							},
							{
								kind: 'account',
								path: 'tokenProgram',
							},
							{
								kind: 'account',
								path: 'mintA',
							},
						],
						program: {
							kind: 'const',
							value: [
								140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41,
								20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132,
								4, 142, 123, 216, 219, 233, 248, 89,
							],
						},
					},
				},
				{
					name: 'systemProgram',
					address: '11111111111111111111111111111111',
				},
				{
					name: 'associatedTokenProgram',
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
				},
				{
					name: 'tokenProgram',
				},
			],
			args: [],
		},
	],
	accounts: [
		{
			name: 'gifterEscrow',
			discriminator: [233, 223, 61, 92, 104, 68, 94, 120],
		},
	],
	events: [
		{
			name: 'completeEvent',
			discriminator: [95, 114, 97, 156, 212, 46, 152, 8],
		},
	],
	types: [
		{
			name: 'completeEvent',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'maker',
						type: 'pubkey',
					},
					{
						name: 'taker',
						type: 'pubkey',
					},
				],
			},
		},
		{
			name: 'gifterEscrow',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'escrowId',
						type: 'u64',
					},
					{
						name: 'makerExpectedPrice',
						type: 'u64',
					},
					{
						name: 'maker',
						type: 'pubkey',
					},
					{
						name: 'mintA',
						type: 'pubkey',
					},
					{
						name: 'mintB',
						type: 'pubkey',
					},
					{
						name: 'bump',
						type: 'u8',
					},
				],
			},
		},
	],
};
