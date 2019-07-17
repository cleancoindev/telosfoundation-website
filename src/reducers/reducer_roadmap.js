//just return an array of all the months
//might have to rename stages
//category is case insensitive, but must be spelled correctly
//if no category is give, icon will be dark circle.  If it is misspelled, no icon will appear at all
export default function(){
	return [
		{
			month: 'June',
			year: 2018,
			stage: 'zero',
			items: [
				{
					content: 'Write Whitepaper',
					link: 'https://resources.telosfoundation.io/wp_master/telos_white_paper_english.pdf' //link can be string or array
				},
				{
					category: 'development',
					content: 'Create Telos Branch of EOSIO Repository',
					link: 'https://github.com/Telos-Foundation/telos'
				},
				{
					category: 'development',
					content: 'Modify Teclos CLI',
					link: 'https://github.com/Telos-Foundation/telos/issues/25'
				},
				{
					category: 'tools',
					content: 'Release "Grow" network generation tool',
					link: 'https://github.com/Telos-Foundation/grow'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 0'
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
					link: 'http://www.telosfoundation.io/TelosAnnouncement.pdf'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 1',
					link: 'https://medium.com/telos-foundation/telos-network-weekly-report-july-19-2018-111dec3edc7b'
				},
				{
					category: 'tools',
					content: 'Release public testnet monitor v1',
					link: 'https://github.com/Telos-Foundation/telos-monitor'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 1.1',
					link: 'https://github.com/Telos-Foundation/telos#testnet-road-map'
				},
				{
					category: 'development',
					content: 'Release Equitable BP pay'
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
					link: 'https://github.com/Telos-Foundation/telos/issues/10'
				},
				{
					category: 'development',
					content: 'Release inverse-weighted voting function',
					link: 'https://github.com/Telos-Foundation/telos/issues/7'
				},
				{
					category: 'governance',
					content: 'Release initial draft of TBNOA (\'constitution\')',
					link: 'https://medium.com/officialtelos/below-is-the-first-draft-of-the-telos-network-operating-agreement-which-is-meant-to-be-reviewed-a29d54e1f71a'
				},
				{
					category: 'development',
					content: 'Release TIP-5 token standard',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/tip-0005.md'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 2',
					link: 'https://github.com/Telos-Foundation/telos#testnet-road-map'
				},
				{
					category: 'tools',
					content: 'Release testnet monitor v2',
					link: 'https://github.com/Telos-Foundation/telos-monitor-Deprecated'
				},
				{
					category: 'governance',
					content: 'Release Regproducer contract',
					link: 'https://medium.com/telos-foundation/telos-regproducer-human-language-contract-1281e28070d8'
				},
				{
					category: 'governance',
					content: 'Release BP Infrastructure Requirements',
					link: 'https://medium.com/telos-foundation/telos-block-producer-infrastructure-requirements-9a93b59dc7d5'
				},
				{
					category: 'development',
					content: 'Release Standby BP rotation function',
					link: 'https://github.com/Telos-Foundation/telos/issues/3'
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
					link: 'https://github.com/Telos-Foundation/telospy'
				},
				{
					category: 'tools',
					content: 'Sqrl wallet released',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 2.1',
					link: '#'
				},
				{
					category: 'community',
					content: 'Create Telos knowledgebase wiki',
					link: 'https://github.com/Telos-Foundation/telos/wiki'
				},
				{
					category: 'tools',
					content: 'Add Telos bootstrap server',
					link: '#'
				},
				{
					category: 'development',
					content: 'Release removal of non-producing BPs',
					link: 'https://github.com/Telos-Foundation/telos/issues/52'
				},
				{
					category: 'governance',
					content: 'Telos Foundation Charter adopted',
					link: 'https://medium.com/@teloslogical/telos-foundation-organization-and-tfvt-token-distribution-process-b5b02de21424'
				},
				{
					category: 'tools',
					content: 'Release testnet full block explorer',
					link: 'http://testnet.telosfoundation.io/'
				},
				{
					category: 'community',
					content: 'Lost Key Recovery Program begins',
					link: 'https://medium.com/@teloslogical/telos-lost-and-compromised-account-key-swap-process-c85e8a852dbb'
				},
			]
		},
		{
			month: 'October',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'network',
					content: 'Telos Staging Network launched'
				},
				{
					category: 'development',
					content: 'Release Block Producer kick function',
					link: 'https://github.com/Telos-Foundation/telos/issues/56'
				},
				{
					category: 'development',
					content: 'Exchange Token Reserve Fund created',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/tip-0011.md'
				},
				{
					category: 'governance',
					content: 'TBNOA Ratified',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/TelosOperatingAgreement.md'
				},
				{
					category: 'governance',
					content: 'BP Minimum Requirements ratified',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/BPMinReq.md'
				},
				{
					category: 'governance',
					content: 'Regarb contract Ratified',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/Regarb.md'
				},
				{
					category: 'governance',
					content: 'Arbitrator minimum requirements ratified',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/ArbMinReq.md'
				},
				{
					category: 'governance',
					content: 'Data Protection Policy ratified',
					link: 'https://github.com/Telos-Foundation/tips/blob/master/DataProtectionPolicy.md'
				},
				{
					category: 'network',
					content: 'Launch sequence script published'
				},
				{
					category: 'governance',
					content: 'Established RAM management policy',
					link: 'https://medium.com/@teloslogical/telos-interim-ram-administration-director-position-paper-ace4aaf7c467'
				}
			]
		},
		{
			month: 'November',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'network',
					content: 'Telos IPFS cluster established',
					link: 'https://github.com/jhexperiment/telos-ipfs-notes'
				},
				{
					category: 'development',
					content: 'Missed block tracking function'
				},
				{
					category: 'tools',
					content: 'Update Sqrl 0.5.3 - first multi-chain EOSIO wallet',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'development',
					content: 'Conform Telos to EOSIO CDT',
					link: 'https://github.com/Telos-Foundation/telos/issues/39'
				},
				{
					category: 'network',
					content: 'Launch Testnet Stage 3',
					link: 'https://github.com/Telos-Foundation/telos#testnet-road-map'
				},
				{
					category: 'governance',
					content: 'Governance documents published to TIPFS'
				},
				{
					category: 'governance',
					content: 'Telos Foundation Interim Charter ratified',
					link: 'https://medium.com/telos-foundation/telos-foundation-interim-charter-and-tfvt-token-distribution-process-ca88b2ef1e1e'
				},
				{
					category: 'tools',
					content: 'Facilitate integrations from Scatter wallet',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'development',
					content: 'Release Trail Service voting system v.1',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/eosio.trail'
				},
				{
					category: 'development',
					content: 'BP pay inflation schedule code released',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/eosio.system'
				}
			]
		},
		{
			month: 'December',
			year: 2018,
			stage: 'one',
			items: [
				{
					category: 'development',
					content: 'Release Telos IPSF system v.1 (governance only)',
					link: 'https://github.com/Telos-Foundation/tipfs'
				},
				{
					category: 'development',
					content: 'Complete Worker Proposal System contract',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/eosio.saving'
				},
				{
					category: 'development',
					content: 'Release Ratify/Amend contract',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/eosio.amend'
				},
				{
					category: 'governance',
					content: 'Implement RAM Administration functions'
				},
				{
					category: 'development',
					content: 'Release Telos Foundation voting tokens (TFVT)',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/telos.tfvt'
				},
				{
					category: 'tools',
					content: 'Governance features wallet integration',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'network',
					content: 'Launching Staging Net'
				},
				{
					category: 'development',
					content: 'Complete Arbitration contract stage 1 (arbitrator elections)',
					link: 'https://github.com/Telos-Foundation/telos/issues/27'
				},
				{
					category: 'development',
					content: 'Release free account creation contract and interface',
					link: 'https://github.com/Telos-Foundation/eosio.contracts/tree/master/telos.free'
				},
				{
					category: 'network',
					content: 'Launch Mainnet',
					link: 'https://medium.com/telos-foundation/telos-blockchain-network-launches-bc458a251456'
				},
				{
					category: 'tools',
					content: 'Sqrl wallet 0.5.4 adds governance/Trail Service voting',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'development',
					content: 'BP Compliance system implemented',
					link: 'https://medium.com/telos-foundation/telos-testnet-block-compliance-testing-fab618724218'
				},
				{
					category: 'governance',
					content: 'First RAM Guidance Price published',
					link: 'https://medium.com/telos-foundation/telos-ram-public-guidance-price-4d240dfb5fa6'
				},
				{
					category: 'community',
					content: 'First exchanges list TLOS',
					link: 'https://telosfoundation.io/'
				}
			]
		},
		{
			month: 'January',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: 'tools',
					content: 'Add app integrations to Sqrl wallet',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'governance',
					content: 'Telos Foundation board on-chain election',
					link: 'https://medium.com/telos-foundation/press-release-telos-foundation-board-elections-completed-ecfdf9b393b4'
				},
				{
					category: 'development',
					content: 'Capture of on-chain active-account snapshots',
					link: 'https://github.com/Telos-Foundation/snapshots'
				},
				{
					category: 'community',
					content: 'GoodGrants program begins',
					link: 'https://medium.com/goodblock-io/goodgrant-recipient-teachology-io-7bd064f7d994'
				},
				{
					category: 'tools',
					content: 'Release in-wallet exchange functions to Sqrl wallet',
					link: 'https://github.com/Telos-Foundation/sqrl'
				},
				{
					category: 'tools',
					content: 'Telos monitor/blockchain explorer upgraded',
					link: 'https://github.com/Telos-Foundation/TelosWEB/'
				},
				{
					category: 'tools',
					content: 'First mobile wallet (Awake)',
					link: 'https://www.pgyer.com/awake'
				},
				{
					category: 'community',
					content: 'Telos Original Snapshot captured',
					link: 'https://medium.com/goodblock-io/telos-original-snapshot-update-fd6d60132a'
				},
				{
					category: 'community',
					content: 'First Apps deploy',
					link: 'https://medium.com/goodblock-io/telos-weekly-report-january-4th-2019-3026a93c9668'
				},
				{
					category: 'community',
					content: 'Telos listed on Blocktivity',
					link: 'https://blocktivity.info/'
				}
			]
		},
		{
			month: 'February',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: 'tools',
					content: 'Math wallet, MyTelos wallet deploy',
					link: 'https://myteloswallet.one/dashboard'
				},
				{
					category: 'network',
					content: 'First tokensale on Telos'
				},
				{
					category: 'community',
					content: 'Telos Users\' Guide published',
					link: 'https://medium.com/goodblock-io/telos-users-guide-51fde3161908'
				},
				{
					category: 'community',
					content: 'GoodGrants recipients',
					link: 'https://medium.com/goodblock-io/goodgrant-recipient-teachology-io-7bd064f7d994'
				},
				{
					category: 'governance',
					content: 'Arbitrator elections begin'
				},
				{
					category: 'community',
					content: 'CoinGecko, Livecoin watch track TLOS'
				},
				{
					category: 'community',
					content: 'First distribution of Exchange Token Reserve funds'
				},
				{
					category: 'network',
					content: 'First airdrop for Telos accounts (QBE)'
				},
				{
					category: 'tools',
					content: 'Chainspector.io portal launched',
					link: 'https://chainspector.io/'
				},
				{
					category: 'network',
					content: 'Token migration from Ethereum to Telos (QBE)'
				},
				{
					category: 'network',
					content: 'Token migration from EOS to Telos (EDNA)'
				},
				{
					category: 'development',
					content: 'TCD Roadmap page released'
				},
				{
					category: 'tools',
					content: 'iOS mobile wallet Kibisis released for Telos',
					link: 'https://kibisis.ch/'
				},
				{
					category: 'development',
					content: 'ProveAccount method released'
				}
			]
		},
		{
			month: 'March',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: 'governance',
					content: 'First Worker Proposal ballots begin',
					link: 'https://medium.com/goodblock-io/vote-to-support-scatter-d9e4a729317c'
				},
				{
					category: 'governance',
					content: 'First arbitrator elections close'
				},
				{
					category: 'network',
					content: 'ACORN UBI token released'
				},
				{
					category: 'governance',
					content: 'First TCD Worker Proposal submitted'
				},
				{
					category: 'tools',
					content: 'BP Monitoring Tool released'
				},
				{
					category: 'governance',
					content: 'WordProof WP passes'
				}
			]
		},
		{
			month: 'April',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: 'development',
					content: 'Telos IPFS expands'
				},
				{
					category: 'community',
					content: 'CoinTiger lists TLOS pairs'
				},
				{
					category: 'community',
					content: 'ABCC lists TLOS pairs'
				},
				{
					category: 'network',
					content: 'Carbon CUSD stablecoin announces Telos deployment'
				}
			]
		},
		{
			month: 'May',
			year: 2019,
			stage: 'two',
			items: [
				{
					category: 'governance',
					content: 'Telos Economic Development Plan proposed'
				},
				{
					category: 'governance',
					content: 'TCD WP #2 submitted'
				},
				{
					category: 'community',
					content: 'Newdex lists TLOS and Telos tokens'
				},
				{
					category: 'community',
					content: 'Telos Blockchain Solutions consultancy launches'
				},
				{
					category: 'community',
					content: 'Vapaée native DEX launches' 
				},
				{
					category: 'tools',
					content: 'Telos native Android mobile wallet released' 
				}
			]
		}
	];
}