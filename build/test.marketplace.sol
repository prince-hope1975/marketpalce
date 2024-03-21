// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  uint256 elem0;
  }
struct T1 {
  bytes32 name;
  bytes8 symbol;
  uint256 decimals;
  uint256 totalSupply;
  uint256 price;
  address payable token;
  }
struct T2 {
  uint256 elem0;
  uint256 elem1;
  }
enum _enum_T4 {SecondaryBuy0_2241, halt0_2241, stopContract0_2241}
struct T4 {
  _enum_T4 which;
  T0 _SecondaryBuy0_2241;
  bool _halt0_2241;
  bool _stopContract0_2241;
  }
struct T5 {
  uint256 elem0;
  T4 elem1;
  }
struct T6 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T8 {
  address payable v2888;
  uint256 v2889;
  address payable v2890;
  uint256 v2891;
  uint256 v2892;
  bytes32 v2893;
  bytes8 v2894;
  bool v2922;
  uint256 v2923;
  uint256 v2925;
  T6[1] v2932;
  uint256 v2933;
  }
struct T9 {
  uint256 elem0;
  uint256 elem1;
  address payable elem2;
  uint256 elem3;
  uint256 elem4;
  bytes32 elem5;
  bytes8 elem6;
  address payable elem7;
  }
struct T10 {
  address payable v2888;
  uint256 v2889;
  address payable v2890;
  uint256 v2891;
  uint256 v2892;
  bytes32 v2893;
  bytes8 v2894;
  T6[1] v2900;
  }
struct T11 {
  address payable elem0;
  uint256 elem1;
  address payable elem2;
  uint256 elem3;
  uint256 elem4;
  bytes32 elem5;
  bytes8 elem6;
  bool elem7;
  bool elem8;
  uint256 elem9;
  uint256 elem10;
  uint256 elem11;
  T6[1] elem12;
  uint256 elem13;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set7(T6[1] memory arr, uint256 idx, T6 memory val) internal  returns (T6[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T9 _a);
  event _reach_e1(address _who, T0 _a);
  event _reach_e3(address _who, T5 _a);
  event _reach_oe_v3071(bool v0);
  event _reach_oe_v3191(bool v0);
  event _reach_oe_v3293(bool v0);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_SecondaryBuy;
    T0 _reachr_balance;
    bool _reachr_halt;
    bool _reachr_halted;
    T1 _reachr_meta;
    address payable _reachr_owner;
    bool _reachr_stopContract;
    address payable _reachr_token;
    T2 _reachr_tracker;
    }
  struct _F4151 {
    T0 v4130;
    T4 v4131;
    }
  function _reacha_SecondaryBuy(uint256 _a, Memory memory _Memory) internal  {
    _F4151 memory _f;
    _f.v4130.elem0 = _a;
    _f.v4131.which = _enum_T4.SecondaryBuy0_2241;
    _f.v4131._SecondaryBuy0_2241 = _f.v4130;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4131;
    _reachi_3(_ja, _Memory);
    }
  struct _F4152 {
    T0 v2943;
    }
  function _reacha_balance(bool _a, Memory memory _Memory) internal view {
    _F4152 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(7) /*'(./test.rsh:207:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _f.v2943.elem0 = _svs.v2923;
    _Memory._reachr_balance = _f.v2943;
    }
  struct _F4153 {
    bool v4135;
    T4 v4136;
    }
  function _reacha_halt(bool _a, Memory memory _Memory) internal  {
    _F4153 memory _f;
    _f.v4136.which = _enum_T4.halt0_2241;
    _f.v4136._halt0_2241 = _f.v4135;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4136;
    _reachi_3(_ja, _Memory);
    }
  function _reacha_halted(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(8) /*'(./test.rsh:211:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_halted = _svs.v2922;
    }
  struct _F4155 {
    T1 v2918;
    }
  function _reacha_meta(bool _a, Memory memory _Memory) internal view {
    _F4155 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(9) /*'(./test.rsh:206:9:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _f.v2918.name = _svs.v2893;
    _f.v2918.symbol = _svs.v2894;
    _f.v2918.decimals = _svs.v2892;
    _f.v2918.totalSupply = _svs.v2889;
    _f.v2918.price = _svs.v2891;
    _f.v2918.token = _svs.v2890;
    _Memory._reachr_meta = _f.v2918;
    }
  function _reacha_owner(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(10) /*'(./test.rsh:210:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_owner = _svs.v2888;
    }
  struct _F4157 {
    bool v4139;
    T4 v4140;
    }
  function _reacha_stopContract(bool _a, Memory memory _Memory) internal  {
    _F4157 memory _f;
    _f.v4140.which = _enum_T4.stopContract0_2241;
    _f.v4140._stopContract0_2241 = _f.v4139;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4140;
    _reachi_3(_ja, _Memory);
    }
  function _reacha_token(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(4))), uint256(11) /*'(./test.rsh:209:10:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _Memory._reachr_token = _svs.v2890;
    }
  struct _F4159 {
    T2 v2941;
    }
  function _reacha_tracker(bool _a, Memory memory _Memory) internal view {
    _F4159 memory _f;
    reachRequire(((current_step == uint256(4))), uint256(12) /*'(./test.rsh:212:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _f.v2941.elem0 = ((_svs.v2932[uint256(0)]).elem0);
    _f.v2941.elem1 = _svs.v2891;
    _Memory._reachr_tracker = _f.v2941;
    }
  struct _F4160 {
    T6 v2862;
    T6[1] v2863;
    }
  function _reachi_0(T9 memory _a, Memory memory _Memory) internal  {
    _F4160 memory _f;
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(14) /*'time check at ./test.rsh:219:5:dot'*/);
    _f.v2862.elem0 = uint256(0);
    _f.v2862.elem1 = uint256(0);
    _f.v2862.elem2 = false;
    _f.v2863[0] = _f.v2862;
    reachRequire((((_a.elem1) > uint256(0))), uint256(15) /*'(reach standard library:57:5:application,[at ./test.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Supply must be greater than 0")'*/);
    reachRequire((((_a.elem3) < uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(16) /*'(reach standard library:57:5:application,[at ./test.rsh:222:12:application call to "check" (defined at: reach standard library:49:32:function exp)],Just "Price Too Large")'*/);
    
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./test.rsh:219:5:dot,[],"verify network token pay amount")'*/);
    T10 memory nsvs;
    nsvs.v2888 = payable(msg.sender);
    nsvs.v2889 = (_a.elem1);
    nsvs.v2890 = (_a.elem2);
    nsvs.v2891 = (_a.elem3);
    nsvs.v2892 = (_a.elem4);
    nsvs.v2893 = (_a.elem5);
    nsvs.v2894 = (_a.elem6);
    nsvs.v2900 = (array_set7(_f.v2863, uint256(0), (T6({elem0: uint256(0), elem1: (_f.v2863[uint256(0)]).elem1, elem2: (_f.v2863[uint256(0)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F4161 {
    T6[1] v2915;
    }
  function _reachi_1(T0 memory _a, Memory memory _Memory) internal  {
    _F4161 memory _f;
    reachRequire((current_step == uint256(1)), uint256(18) /*'state check at ./test.rsh:230:5:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(19) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(20) /*'time check at ./test.rsh:230:5:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(21) /*'(./test.rsh:230:5:dot,[],"verify network token pay amount")'*/);
    _f.v2915 = array_set7(_svs.v2900, uint256(0), (T6({elem0: (unsafeAdd(((_svs.v2900[uint256(0)]).elem0), _svs.v2889)), elem1: (_svs.v2900[uint256(0)]).elem1, elem2: (_svs.v2900[uint256(0)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2890, _svs.v2889)), uint256(22) /*'(./test.rsh:230:5:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v2888 == payable(msg.sender))), uint256(23) /*'(./test.rsh:230:5:dot,[],Just "sender correct")'*/);
    T11  memory _ja;
    _ja.elem0 = _svs.v2888;
    _ja.elem1 = _svs.v2889;
    _ja.elem2 = _svs.v2890;
    _ja.elem3 = _svs.v2891;
    _ja.elem4 = _svs.v2892;
    _ja.elem5 = _svs.v2893;
    _ja.elem6 = _svs.v2894;
    _ja.elem7 = true;
    _ja.elem8 = false;
    _ja.elem9 = ((_f.v2915[uint256(0)]).elem0);
    _ja.elem10 = uint256(0);
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = _f.v2915;
    _ja.elem13 = uint256(0);
    _reachl_2(_ja, _Memory);
    }
  struct _F4162 {
    T0 v3021;
    uint256 v3027;
    }
  function _reachi_3(T5 memory _a, Memory memory _Memory) internal  {
    _F4162 memory _f;
    reachRequire((current_step == uint256(4)), uint256(24) /*'state check at ./test.rsh:244:21:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(25) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(26) /*'time check at ./test.rsh:244:21:dot'*/);
    if ((_a.elem1).which == _enum_T4.SecondaryBuy0_2241) {
    _f.v3021 = (_a.elem1)._SecondaryBuy0_2241;
    _f.v3027 = safeMul(_svs.v2891, (_f.v3021.elem0));
    reachRequire((msg.value == _f.v3027), uint256(27) /*'(./test.rsh:244:21:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2890, uint256(0))), uint256(28) /*'(./test.rsh:244:21:dot,[],"verify non-network token pay amount")'*/);
    reachRequire((((_f.v3021.elem0) <= ((_svs.v2932[uint256(0)]).elem0))), uint256(29) /*'(reach standard library:57:5:application,[at ./test.rsh:272:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./test.rsh:271:27:application call to [unknown function] (defined at: ./test.rsh:271:27:function exp)],Nothing)'*/);
    emit _reach_oe_v3071( (false));
    _Memory._reachr_SecondaryBuy = (false);
    _svs.v2888.transfer(_f.v3027);
    safeTokenTransfer(_svs.v2890, payable(msg.sender), (_f.v3021.elem0));
    T11  memory _ja;
    _ja.elem0 = _svs.v2888;
    _ja.elem1 = _svs.v2889;
    _ja.elem2 = _svs.v2890;
    _ja.elem3 = _svs.v2891;
    _ja.elem4 = _svs.v2892;
    _ja.elem5 = _svs.v2893;
    _ja.elem6 = _svs.v2894;
    _ja.elem7 = true;
    _ja.elem8 = _svs.v2922;
    _ja.elem9 = (safeSub(_svs.v2923, (_f.v3021.elem0)));
    _ja.elem10 = (safeAdd(_svs.v2925, (_f.v3021.elem0)));
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = (array_set7(_svs.v2932, uint256(0), (T6({elem0: (unsafeSub(((_svs.v2932[uint256(0)]).elem0), (_f.v3021.elem0))), elem1: (_svs.v2932[uint256(0)]).elem1, elem2: (_svs.v2932[uint256(0)]).elem2}))));
    _ja.elem13 = (unsafeSub((unsafeAdd(_svs.v2933, _f.v3027)), _f.v3027));
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T4.halt0_2241) {
    reachRequire(((payable(msg.sender) == _svs.v2888)), uint256(30) /*'(reach standard library:57:5:application,[at ./test.rsh:286:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./test.rsh:285:22:application call to [unknown function] (defined at: ./test.rsh:285:22:function exp),at ./test.rsh:244:21:application call to [unknown function] (defined at: ./test.rsh:285:22:function exp),at ./test.rsh:244:21:application call to [unknown function] (defined at: ./test.rsh:244:21:function exp),at ./test.rsh:260:14:application call to [unknown function] (defined at: ./test.rsh:260:14:function exp)],Just "You are not Owner")'*/);
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./test.rsh:244:21:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2890, uint256(0))), uint256(32) /*'(./test.rsh:244:21:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v3191( (false));
    _Memory._reachr_halt = (false);
    T11  memory _ja;
    _ja.elem0 = _svs.v2888;
    _ja.elem1 = _svs.v2889;
    _ja.elem2 = _svs.v2890;
    _ja.elem3 = _svs.v2891;
    _ja.elem4 = _svs.v2892;
    _ja.elem5 = _svs.v2893;
    _ja.elem6 = _svs.v2894;
    _ja.elem7 = true;
    _ja.elem8 = (_svs.v2922 ? false : true);
    _ja.elem9 = _svs.v2923;
    _ja.elem10 = _svs.v2925;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = _svs.v2932;
    _ja.elem13 = _svs.v2933;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T4.stopContract0_2241) {
    reachRequire((msg.value == uint256(0)), uint256(33) /*'(./test.rsh:244:21:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2890, uint256(0))), uint256(34) /*'(./test.rsh:244:21:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v3293( (true));
    _Memory._reachr_stopContract = (true);
    T11  memory _ja;
    _ja.elem0 = _svs.v2888;
    _ja.elem1 = _svs.v2889;
    _ja.elem2 = _svs.v2890;
    _ja.elem3 = _svs.v2891;
    _ja.elem4 = _svs.v2892;
    _ja.elem5 = _svs.v2893;
    _ja.elem6 = _svs.v2894;
    _ja.elem7 = false;
    _ja.elem8 = _svs.v2922;
    _ja.elem9 = _svs.v2923;
    _ja.elem10 = _svs.v2925;
    _ja.elem11 = uint256(block.number);
    _ja.elem12 = _svs.v2932;
    _ja.elem13 = _svs.v2933;
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T11 memory _a, Memory memory _Memory) internal  {
    if (_a.elem7) {
      T8 memory nsvs;
      nsvs.v2888 = _a.elem0;
      nsvs.v2889 = _a.elem1;
      nsvs.v2890 = _a.elem2;
      nsvs.v2891 = _a.elem3;
      nsvs.v2892 = _a.elem4;
      nsvs.v2893 = _a.elem5;
      nsvs.v2894 = _a.elem6;
      nsvs.v2922 = _a.elem8;
      nsvs.v2923 = _a.elem9;
      nsvs.v2925 = _a.elem10;
      nsvs.v2932 = _a.elem12;
      nsvs.v2933 = _a.elem13;
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      safeTokenTransfer(_a.elem2, _a.elem0, ((_a.elem12[uint256(0)]).elem0));
      _a.elem0.transfer(_a.elem13);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function SecondaryBuy(uint256 v4133) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_SecondaryBuy(v4133, _Memory);
    return _Memory._reachr_SecondaryBuy;
    }
  constructor(T9 memory v4144) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v4144, _Memory);
    }
  function _reachp_1(T0 calldata v4147) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v4147, _Memory);
    }
  function _reachp_3(T5 calldata v4150) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v4150, _Memory);
    }
  function balance() external view returns (T0 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_balance(_ja, _Memory);
    return _Memory._reachr_balance;
    }
  function halt() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_halt(_ja, _Memory);
    return _Memory._reachr_halt;
    }
  function halted() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_halted(_ja, _Memory);
    return _Memory._reachr_halted;
    }
  function meta() external view returns (T1 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_meta(_ja, _Memory);
    return _Memory._reachr_meta;
    }
  function owner() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_owner(_ja, _Memory);
    return _Memory._reachr_owner;
    }
  function stopContract() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_stopContract(_ja, _Memory);
    return _Memory._reachr_stopContract;
    }
  function token() external view returns (address payable) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_token(_ja, _Memory);
    return _Memory._reachr_token;
    }
  function tracker() external view returns (T2 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_tracker(_ja, _Memory);
    return _Memory._reachr_tracker;
    }
  }
