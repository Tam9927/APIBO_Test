TestConfiguration{
		operations=[Operation{
			testPath='/pet/{petId}/uploadImage', 
			operationId='uploadFile', 
			method='POST', 
			testParameters=[TestParameter{
 				name='petId', 
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
			testPath='/pet', 
			operationId='addPet', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/pet', 
			operationId='updatePet', 
			method='PUT', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/pet/findByStatus', 
			operationId='findPetsByStatus', 
			method='GET', 
			testParameters=[TestParameter{
 				name='status', 
				in='query', 
				weight=1.0, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/pet/findByTags', 
			operationId='findPetsByTags', 
			method='GET', 
			testParameters=[TestParameter{
 				name='tags', 
				in='query', 
				weight=1.0, 
				testcases.generators=Generator{
					type='null', 
					genParameters=[], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/pet/{petId}', 
			operationId='getPetById', 
			method='GET', 
			testParameters=[TestParameter{
 				name='petId', 
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
			testPath='/pet/{petId}', 
			operationId='updatePetWithForm', 
			method='POST', 
			testParameters=[TestParameter{
 				name='petId', 
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
			testPath='/pet/{petId}', 
			operationId='deletePet', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='api_key', 
				in='header', 
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
 				name='petId', 
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
			testPath='/store/order', 
			operationId='placeOrder', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/store/order/{orderId}', 
			operationId='getOrderById', 
			method='GET', 
			testParameters=[TestParameter{
 				name='orderId', 
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
						values=[1], 
						objectValues=null
					}, GenParameter{
						name='max', 
						values=[10], 
						objectValues=null
					}], 
					valid=true
				}
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/store/order/{orderId}', 
			operationId='deleteOrder', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='orderId', 
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
						values=[1], 
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
			testPath='/store/inventory', 
			operationId='getInventory', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/user/createWithArray', 
			operationId='createUsersWithArrayInput', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/user/createWithList', 
			operationId='createUsersWithListInput', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/user/{username}', 
			operationId='getUserByName', 
			method='GET', 
			testParameters=[TestParameter{
 				name='username', 
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
			testPath='/user/{username}', 
			operationId='updateUser', 
			method='PUT', 
			testParameters=[TestParameter{
 				name='username', 
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
			testPath='/user/{username}', 
			operationId='deleteUser', 
			method='DELETE', 
			testParameters=[TestParameter{
 				name='username', 
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
			testPath='/user/login', 
			operationId='loginUser', 
			method='GET', 
			testParameters=[TestParameter{
 				name='username', 
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
 				name='password', 
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
			}], 
			expectedResponse='null'
		}, Operation{
			testPath='/user/logout', 
			operationId='logoutUser', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/user', 
			operationId='createUser', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}]
	}