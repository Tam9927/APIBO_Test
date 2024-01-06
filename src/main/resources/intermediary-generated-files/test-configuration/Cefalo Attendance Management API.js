TestConfiguration{
		operations=[Operation{
			testPath='/api/Users/{id}/Attendances/{FromDate}/{ToDate}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
 				name='IncludeWeekends', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='IncludeHolidays', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='StatusType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances/{FromDate}/{ToDate}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
 				name='statusType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}/Attendances/{FromDate}/{ToDate}/Download', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
 				name='IncludeWeekends', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='IncludeHolidays', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}, TestParameter{
 				name='StatusType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances/{FromDate}/{ToDate}/Download', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
 				name='statusType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances/StatusTypes', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Attendances/DataSync/{FromDate}/{ToDate}', 
			operationId='null', 
			method='POST', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
			testPath='/api/Authentication/Internal', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Authentication/Google', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
			testPath='/Api/ExtraWorkApplications', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/Status', 
			operationId='null', 
			method='PATCH', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/{userId}/ExtraWorkApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/DataFilePreview', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/Upload', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/AllStatus', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/ExtraWorkApplications/AllTypes', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/File', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/File/{fileName}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='fileName', 
				in='path', 
				weight=1.0, 
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
			testPath='/api/File/ValidationCriteria/{fileType}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='fileType', 
				in='path', 
				weight=1.0, 
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
			testPath='/Api/LeaveApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
			testPath='/Api/LeaveApplications', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/{userId}/LeaveApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/Status', 
			operationId='null', 
			method='PATCH', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/DataFilePreview', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/Upload', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/AllStatus', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/AllTypes', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/LeaveApplications/LeaveTypes/{userId}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/{userId}/LeaveBalance/{year}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='year', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/LeaveBalance/{year}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='year', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/LeaveBalance/LeaveStatistics/{year}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='year', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='Name', 
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
 				name='TeamNames', 
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
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
			testPath='/Api/Users/LeaveBalance/LeaveStatistics/{year}/Download', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='year', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='Name', 
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
 				name='TeamNames', 
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
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
			testPath='/Api/Users/LeaveBalance/Adjust/{year}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='year', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/LeaveBalance/DataFilePreview', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/LeaveBalance/Upload', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/OfficeTimings', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/OfficeTimings', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/OfficeTimings/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/OfficeTimings/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/OfficeTimings/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Profiles', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}/Profile', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}/Profile/Short', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/BloodGroups', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Skills', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='year', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/PublicHolidays/File', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
			testPath='/Api/RemoteWorkApplications', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/{userId}/RemoteWorkApplications/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Users/{userId}/RemoteWorkApplications', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='query', 
				weight=1.0, 
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
 				name='ToDate', 
				in='query', 
				weight=1.0, 
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
 				name='ApplicationType', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='ApplicationStatus', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageNumber', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='PageSize', 
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
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}, TestParameter{
 				name='SearchValue', 
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
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications/AllApplicationStatus', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications/Type', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/RemoteWorkApplications/UpdateStatus', 
			operationId='null', 
			method='PATCH', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Settings', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Settings', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Settings/Leave', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Settings/PolicyDocs', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/Api/Settings/Profile', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/Member', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/{teamId}/Member', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='teamId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/Members', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Teams/GenerateReport', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/TotalWorkingDays/{FromDate}/{ToDate}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='FromDate', 
				in='path', 
				weight=1.0, 
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
 				name='ToDate', 
				in='path', 
				weight=1.0, 
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
 				name='includeHalfDay', 
				in='query', 
				weight=0.5, 
				testcases.generators=Generator{
					type='RandomBooleanGenerator', 
					genParameters=[], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/Current', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}', 
			operationId='null', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}', 
			operationId='null', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{id}/Details', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='id', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/{userId}/TeamMembers', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/Active/Profiles', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/Roles', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/AttendanceStatistics/{userId}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Users/LeaveStatistics/{userId}', 
			operationId='null', 
			method='GET', 
			testParameters=[TestParameter{
 				name='userId', 
				in='path', 
				weight=1.0, 
				testcases.generators=Generator{
					type='RandomNumberGenerator', 
					genParameters=[GenParameter{
						name='type', 
						values=[integer], 
						objectValues=null
					}, GenParameter{
						name='min', 
						values=null, 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=null, 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}]
	}