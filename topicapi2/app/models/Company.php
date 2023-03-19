<?php

class Company extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $company_id;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $topicrelation;

    /**
     *
     * @var string
     */
    public $namecompany;

    /**
     *
     * @var integer
     */
    public $user_id;

    /**
     *
     * @var integer
     */
    public $zip_id;

    /**
     *
     * @var string
     */
    public $country_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("company");
        $this->hasMany('company_id', 'Website', 'company_id', ['alias' => 'Website']);
        $this->belongsTo('country_id', 'Country', 'country_id', ['alias' => 'Country']);
        $this->belongsTo('user_id', 'User', 'user_id', ['alias' => 'User']);
        $this->belongsTo('zip_id', 'Zipcode', 'zipcode_id', ['alias' => 'Zipcode']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'company';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Company[]|Company|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Company|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
