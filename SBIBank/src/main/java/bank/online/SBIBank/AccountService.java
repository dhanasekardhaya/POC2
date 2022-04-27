package bank.online.SBIBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService 
{
	@Autowired
	AccountRespository repo;
	
	public Account savingAccount(Account account)
	{
		return repo.save(account);
	}
	
	public Account getByValid(long data1, String data2)
	{
		return repo.findAccountByValidation(data1, data2);
	}

}
