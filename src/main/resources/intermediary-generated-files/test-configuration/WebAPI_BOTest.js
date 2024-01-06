TestConfiguration{
		operations=[Operation{
			testPath='/api/Category', 
			operationId='null', 
			method='GET', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Category', 
			operationId='null', 
			method='POST', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Category', 
			operationId='null', 
			method='PUT', 
			testParameters=[], 
			expectedResponse='null'
		}, Operation{
			testPath='/api/Category/{id}', 
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
		}]
	}