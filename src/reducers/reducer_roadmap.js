//just return an array of all the months
//might have to rename stages
export default function(){
	return [
		{
			month: 'June',
			year: 2018,
			stage: 'zero',
			items: [
				{
					content: 'Write Whitepaper',
					link: 'https://telosfoundation.io' //link can be string or array
				},
				{
					category: 'development',
					content: 'Create Telos Branch of EOSIO Repository',
					link: 'https://github.com'
				},
				{
					category: 'development',
					content: 'Modify Teclos CLI',
					link: 'https://github.com'
				},
				{
					category: 'tools',
					content: 'Release "Grow" network generation tool',
					link: ['#', '#']
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 0',
					link: '#'
				}
			]
		},
		{
			month: 'July',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'community',
					content: 'Announce whitepaper and launch group',
					link: '#'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 1',
					link: '#'
				},
				{
					category: 'tools',
					content: 'Release public testnet monitor v1',
					link: '#'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 1.1',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release Equitable BP pay',
					link: 'https://medium.com/@teloslogical/the-telos-foundation-state-of-the-board-the-first-30-days-13e93b1523d0'
				}
			]
		},
		{
			month: 'August',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'development',
					content: 'Release improved Claimrewards contract (eliminates gaming)',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release inverse-weighted voting function',
					link: '#'
				},
				{
					category: 'governance',
					content: 'Release initial draft of TBNOA (\'constitution\')',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release TIP-5 token standard',
					link: '#'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 2',
					link: '#'
				},
				{
					category: 'tools',
					content: 'Release testnet monitor v2',
					link: '#'
				},
				{
					category: 'governance',
					content: 'Release Regproducer contract',
					link: '#'
				},
				{
					category: 'governance',
					content: 'Release BP Infrastructure Requirements',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release Standby BP rotation function',
					link: '#'
				},
			]
		},
		{
			month: 'September',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'tools',
					content: 'Release TelosPy - EOSIO Python implementation',
					link: '#'
				},
				{
					category: 'tools',
					content: 'Sqrl wallet released',
					link: '#'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 2.1',
					link: '#'
				},
				{
					category: 'community',
					content: 'Create Telos knowledgebase wiki',
					link: '#'
				},
				{
					category: 'tools',
					content: 'Add Telos bootstrap server',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release removal of non-producing BPs',
					link: '#'
				},
				{
					category: 'governance',
					content: 'Telos Foundation Charter adopted',
					link: '#'
				},
				{
					category: 'tools',
					content: 'Release testnet full block explorer',
					link: '#'
				},
				{
					category: 'community',
					content: 'Lost Key Recovery Program begins',
					link: '#'
				},
			]
		},
		{
			month: 'October',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: '',
					content: 'Telos Staging Network launched',
					links: '#'
				},
				{
					category: '',
					content: 'Release Block Producer kick function',
					links: '#'
				},
				{
					category: '',
					content: 'Token Exchange Reservere Fund created',
					links: '#'
				},
				{
					category: '',
					content: 'TBNOA Ratified',
					links: '#'
				},
				{
					category: '',
					content: 'BP Minimum Requirements ratified',
					links: '#'
				},
				{
					category: '',
					content: 'Regarb contract Ratified',
					links: '#'
				},
				{
					category: '',
					content: 'Arbitrator minimum requirements ratified',
					links: '#'
				},
				{
					category: '',
					content: 'Data Protection Policy ratified',
					links: '#'
				},
				{
					category: '',
					content: 'Launch sequence script published',
					links: '#'
				},
				{
					category: '',
					content: 'Established RAM management policy',
					links: '#'
				}
			]
		},
		{
			month: 'November',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: '',
					content: 'Telos IPFS cluster established',
					links: '#'
				},
				{
					category: '',
					content: 'Missed block tracking function',
					links: '#'
				},
				{
					category: '',
					content: 'Update Sqrl 0.5.3 - first multi-chain EOSIO wallet',
					links: '#'
				},
				{
					category: '',
					content: 'Conform Telos to EOSIO CDT',
					links: '#'
				},
				{
					category: '',
					content: 'Launch Testnet Stage 3',
					links: '#'
				},
				{
					category: '',
					content: 'Governance documents published to TIPFS',
					links: '#'
				},
				{
					category: '',
					content: 'Telos Foundation Interim Charter ratified',
					links: '#'
				},
				{
					category: '',
					content: 'Facilitate integrations from Scatter wallet',
					links: '#'
				},
				{
					category: '',
					content: 'Release Trail Service voting system v.1',
					links: '#'
				},
				{
					category: '',
					content: 'BP pay inflation schedule code released',
					links: '#'
				}
			]
		},
		{
			month: 'December',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: '',
					content: 'Release Telos IPSF system v.1 (governance only)',
					links: '#'
				},
				{
					category: '',
					content: 'Complete Worker Proposal System contract',
					links: '#'
				},
				{
					category: '',
					content: 'Release Ratify/Amend contract',
					links: '#'
				},
				{
					category: '',
					content: 'Implement RAM Administration functions',
					links: '#'
				},
				{
					category: '',
					content: 'Release Telos Foundation voting tokens (TFVT)',
					links: '#'
				},
				{
					category: '',
					content: 'Governance features wallet integration',
					links: '#'
				},
				{
					category: '',
					content: 'Launching Staging Net',
					links: '#'
				},
				{
					category: '',
					content: 'Complete Arbitration contract stage 1 (arbitrator elections)',
					links: '#'
				},
				{
					category: '',
					content: 'Release free account creation contract and interface',
					links: '#'
				},
				{
					category: '',
					content: 'Launch Mainnet',
					links: '#'
				},
				{
					category: '',
					content: 'Sqrl wallet 0.5.4 adds governance/Trail Service voting',
					links: '#'
				},
				{
					category: '',
					content: 'BP Compliance system implemented',
					links: '#'
				},
				{
					category: '',
					content: 'First RAM Guidance Price published',
					links: '#'
				},
				{
					category: '',
					content: 'First exchanges list TLOS',
					links: '#'
				}
			]
		},
		{
			month: 'January',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: '',
					content: 'Add app integrations to Sqrl wallet',
					links: '#'
				},
				{
					category: '',
					content: 'Telos Foundation board on-chain election',
					links: '#'
				},
				{
					category: '',
					content: 'Capture of on-chain active-account snapshots',
					links: '#'
				},
				{
					category: '',
					content: 'GoodGrants program begins',
					links: '#'
				},
				{
					category: '',
					content: 'Release in-wallet exchange functions to Sqrl wallet',
					links: '#'
				},
				{
					category: '',
					content: 'Telos Foundation Board of Directors election',
					links: '#'
				},
				{
					category: '',
					content: 'Telos monitor/blockchain explorer upgraded',
					links: '#'
				},
				{
					category: '',
					content: 'First mobile wallet (Awake)',
					links: '#'
				},
				{
					category: '',
					content: 'Telos Original Snapshot captured',
					links: '#'
				},
				{
					category: '',
					content: 'First Apps deploy',
					links: '#'
				},
				{
					category: '',
					content: 'Telos listed on Blocktivity',
					links: '#'
				}
			]
		}
	];
}