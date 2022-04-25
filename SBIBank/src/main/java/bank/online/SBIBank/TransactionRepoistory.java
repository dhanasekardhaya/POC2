package bank.online.SBIBank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepoistory extends JpaRepository<Transaction, Long>
{

}
