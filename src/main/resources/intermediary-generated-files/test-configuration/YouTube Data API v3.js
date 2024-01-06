TestConfiguration{
		operations=[Operation{
			testPath='/youtube/v3/commentThreads', 
			operationId='youtube.commentThreads.list', 
			method='GET', 
			testParameters=[TestParameter{
 				name='part', 
				in='query', 
				weight=1.0, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='allThreadsRelatedToChannelId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='channelId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='id', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='maxResults', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=[1], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[100], 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='moderationStatus', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='order', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='pageToken', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='searchTerms', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='textFormat', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/youtube/v3/search', 
			operationId='youtube.search.list', 
			method='GET', 
			testParameters=[TestParameter{
 				name='part', 
				in='query', 
				weight=1.0, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='channelId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='channelType', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='eventType', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='forContentOwner', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='forDeveloper', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='forMine', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='location', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='locationRadius', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='maxResults', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=[0], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[50], 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='onBehalfOfContentOwner', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='order', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='pageToken', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='publishedAfter', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='publishedBefore', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='q', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='regionCode', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='relatedToVideoId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='relevanceLanguage', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='safeSearch', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='topicId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='type', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='videoCaption', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoCategoryId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoDefinition', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoDimension', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoDuration', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoEmbeddable', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoLicense', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoSyndicated', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoType', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/youtube/v3/videos', 
			operationId='youtube.videos.list', 
			method='GET', 
			testParameters=[TestParameter{
 				name='part', 
				in='query', 
				weight=1.0, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='chart', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='hl', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='id', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='locale', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='maxHeight', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=[72], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[8192], 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='maxResults', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=[1], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[50], 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='maxWidth', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=[72], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[8192], 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='myRating', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='onBehalfOfContentOwner', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='pageToken', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='regionCode', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='videoCategoryId', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomStringGenerator', 
					genParameters=[GenParameter{
						name='minLength', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='maxLength', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}]
	}